import React, { useEffect, useState } from 'react';
import { Observable } from 'rxjs';
import './Grid.scss';

// Define the GridData type (shape of the data received from the backend)
interface GridData {
    content: string;
    spanColumns: number;
    spanRows: number;
}

/**
 * Creates an Observable stream from an EventSource (Reactive Stream).
 */
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
    const [gridItems, setGridItems] = useState<GridData[]>([]); // State to store reactive grid items

    useEffect(() => {
        const subscription = getGridDataStream().subscribe({
            next: (newItem) => {
                setGridItems((prevItems) => [...prevItems, newItem]); // Add new grid items to state
            },
            error: (error) => console.error('Error in data stream:', error),
        });

        return () => subscription.unsubscribe(); // Cleanup on component unmount
    }, []); // Empty dependency array ensures this runs once on mount

    // Inline styles for the grid container
    const gridStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: gap,
    };

    return (
        <div className={`grid ${className}`} style={gridStyle}>
            {gridItems.map((item, index) => (
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
        </div>
    );
};

export default Grid;