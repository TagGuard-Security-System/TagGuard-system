import React from 'react';
import { clsx } from 'clsx';

interface CardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  headerAction?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  subtitle, 
  children, 
  className,
  headerAction
}) => {
  return (
    <div className={clsx('bg-white rounded-lg shadow border border-gray-200', className)}>
      {(title || subtitle || headerAction) && (
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              {title && (
                <h3 className="text-lg font-medium text-gray-900">{title}</h3>
              )}
              {subtitle && (
                <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
              )}
            </div>
            {headerAction && (
              <div className="ml-4">{headerAction}</div>
            )}
          </div>
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default Card;