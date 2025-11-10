import { cn } from '@/utils/cn';
import React, { ReactNode } from 'react';

interface CardListWrapperProps {
    children: ReactNode;
    className?: string;
}

const CardListWrapper: React.FC<CardListWrapperProps> = ({ children, className }) => {
    const baseClasses =
        'grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8';

    const meregeClasses = cn(baseClasses, className)

    return (
        <div className={meregeClasses}>
            {children}
        </div>
    );
};

export default CardListWrapper;