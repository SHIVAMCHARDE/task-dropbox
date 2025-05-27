import React from 'react';

type LogoIconProps = {
  className?: string;
};

const LogoIcon: React.FC<LogoIconProps> = ({ className = '' }) => {
  return (
    <div className={`${className} flex flex-col items-center`}>
      <div className="flex space-x-0.5">
        <div className="w-3 h-3 bg-current rounded-sm transform rotate-45"></div>
        <div className="w-3 h-3 bg-current rounded-sm transform rotate-45"></div>
      </div>
      <div className="flex justify-center -mt-0.5">
        <div className="w-3 h-3 bg-current rounded-sm transform rotate-45"></div>
      </div>
    </div>
  );
};

export default LogoIcon;