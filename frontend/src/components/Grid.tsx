import React, { Component, ReactNode } from 'react';
import './Grid.scss';

interface GridItemProps {
    children: ReactNode; // Content of the grid item
    spanColumns?: number; // Number of columns this item spans
    spanRows?: number; // Number of rows this item spans
}

export const GridItem: React.FC<GridItemProps> = ({
                                                      children,
                                                      spanColumns = 1,
                                                      spanRows = 1,
                                                  }) => {
    const itemStyle: React.CSSProperties = {
        gridColumn: `span ${spanColumns}`, // Span across columns
        gridRow: `span ${spanRows}`, // Span across rows
    };

    return <div style={itemStyle}>{children}</div>;
};

interface GridProps {
    columns?: number;
    gap?: string;
    className?: string;
    children?: ReactNode | ReactNode[]; // Children can be GridItem components or raw elements
}

class Grid extends Component<GridProps> {
    static defaultProps = {
        columns: 3,
        gap: '1rem',
    };

    render() {
        const { columns, gap, className, children } = this.props;

        const gridStyle: React.CSSProperties = {
            display: 'grid',
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: gap,
        };

        return (
            <div className={`grid ${className || ''}`} style={gridStyle}>
                {children}
            </div>
        );
    }
}

export default Grid;