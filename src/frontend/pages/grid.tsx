import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Observable } from 'rxjs';
import './Grid.scss';

// Define the GridData type (shape of the data received from the backend)
interface GridData {
    content: string;
    spanColumns: number;
    spanRows: number;
}

// Creates an Observable stream from an EventSource (Reactive Stream)
const getGridDataStream = (): Observable<GridData> => {
    return new Observable<GridData>((observer) => {
        const eventSource = new EventSource('/grid'); // SSE Endpoint

        eventSource.onmessage = (event: MessageEvent) => {
            observer.next(JSON.parse(event.data));
        };

        eventSource.onerror = (error) => {
            observer.error(error);
            eventSource.close();
        };

        return () => eventSource.close(); // Cleanup on unsubscribe
    });
};

interface GridProps {
    columns?: number;
    gap?: string;
    className?: string;
}

const Grid: React.FC<GridProps> = ({ columns = 3, gap = '1rem', className = '' }) => {
    const [allGridItems, setAllGridItems] = useState<GridData[]>([]); // Full list of all items
    const [visibleGridItems, setVisibleGridItems] = useState<GridData[]>([]); // List of visible items
    const [currentBatch, setCurrentBatch] = useState<number>(1); // Current batch number
    const BATCH_SIZE = 100; // Number of rows to load at a time

    const observerRef = useRef<IntersectionObserver | null>(null); // Correctly typed ref for IntersectionObserver

    // UseEffect to fetch all data from the stream
    useEffect(() => {
        const subscription = getGridDataStream().subscribe({
            next: (newItem) => {
                setAllGridItems((prevItems) => [...prevItems, newItem]); // Append items to the all-items list
            },
            error: (error) => console.error('Error in data stream:', error),
        });

        return () => subscription.unsubscribe(); // Cleanup on component unmount
    }, []);

    // Load items for the current batch
    useEffect(() => {
        const startIndex = (currentBatch - 1) * BATCH_SIZE;
        const endIndex = currentBatch * BATCH_SIZE;
        const nextBatch = allGridItems.slice(startIndex, endIndex);

        setVisibleGridItems((prevItems) => [...prevItems, ...nextBatch]);
    }, [currentBatch, allGridItems]);

    // Callback to handle lazy loading
    const loadMoreItems = useCallback(() => {
        setCurrentBatch((prevBatch) => prevBatch + 1); // Load the next batch
    }, []);

    // Intersection Observer to detect scrolling near the bottom
    const bottomElementRef = useCallback(
        (node: HTMLDivElement | null) => {
            // Disconnect the previous observer if it exists
            if (observerRef.current) observerRef.current.disconnect();

            // Create and attach a new observer
            if (node) {
                observerRef.current = new IntersectionObserver((entries) => {
                    if (entries[0].isIntersecting) {
                        loadMoreItems(); // Trigger loading more items
                    }
                });

                observerRef.current.observe(node); // Observe the new node
            }
        },
        [loadMoreItems]
    );

    // Inline styles for the grid container
    const gridStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: gap,
    };

    return (
        <div className={`grid ${className}`} style={gridStyle}>
            {visibleGridItems.map((item, index) => (
                <div
                    key={index}
                    style={{
                        gridColumn: `span ${item.spanColumns}`,
                        gridRow: `span ${item.spanRows}`,
                    }}
                >
                    {item.content}
                </div>
            ))}
            {/* Add a ref to the element at the bottom to trigger lazy loading */}
            <div ref={bottomElementRef}></div>
        </div>
    );
};

export default Grid;