import React from 'react';

const Card = ({ children, className = '', padding = 'medium', ...props }) => {
  const baseClasses = 'bg-white rounded-lg shadow-sm border border-gray-200';
  
  const paddings = {
    none: '',
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8',
  };

  const classes = `${baseClasses} ${paddings[padding]} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
