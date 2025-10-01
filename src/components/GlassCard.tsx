import React from 'react';

type GlassCardProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
};

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', onClick, ...rest }) => {
  const clickable = typeof onClick === 'function';
  return (
    <div
      onClick={onClick}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      className={`bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-6 shadow-md ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default GlassCard;