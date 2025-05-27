
import React, { useEffect, useRef, useState, ReactNode } from 'react';
import { Quote, Lock, GitGraph } from 'lucide-react';
import LogoIcon from './LogoIcon';

type DesignCardProps = {
  title: string;
  color: string;
  children: ReactNode;
  className?: string;
  faded?: boolean;
};

const DesignCard: React.FC<DesignCardProps> = ({ title, color, children, className = '', faded = false }) => {
  return (
    <div
      className={`
        relative overflow-hidden p-4 transition-all duration-500 ease-in-out
        ${color} ${className}
        ${faded ? 'opacity-0 scale-50 blur-sm pointer-events-none' : 'opacity-100 scale-100'}
      `}
    >
      {title && <h3 className="text-sm font-semibold text-gray-800 mb-2">{title}</h3>}
      <div className="flex items-center justify-center h-full">{children}</div>
    </div>
  );
};

const Responsive: React.FC = () => {
  const [focused, setFocused] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFocused(entry.intersectionRatio < 0.8);
      },
      {
        threshold: [0.8],
      }
    );

    if (triggerRef.current) observer.observe(triggerRef.current);

    return () => {
      if (triggerRef.current) observer.unobserve(triggerRef.current);
    };
  }, []);

  return (
    <div className="h-[100%] bg-white">
    
      <div ref={triggerRef} className="h-[1px]"></div>

      <div className="w-full max-w-sm mx-auto p-2 mt-10">
        <div className="grid grid-cols-3 auto-rows-[minmax(60px,_auto)] gap-1 relative">

          <DesignCard title="Framework" color="bg-slate-800" className="col-span-1 row-span-2 text-white" faded={focused} >
            <GitGraph className="w-8 h-8 text-gray-300" />
          </DesignCard>

          <DesignCard title="Voice & Tone" color="bg-yellow-300" className="col-span-2 row-span-2" faded={focused}>
            <div className="flex flex-col items-center justify-center">
              <Quote className="w-10 h-10 text-amber-800" />
              <Quote className="w-10 h-10 text-amber-800 -mt-2 ml-8" />
            </div>
          </DesignCard>

          <DesignCard title="Logo" color="bg-cyan-300" className="col-start-1 col-span-2 row-start-3" faded={focused}>
            <LogoIcon className="w-10 h-10 text-blue-500" />
          </DesignCard>

          <DesignCard title="Typography" color="bg-orange-500" className="col-start-3 row-start-3 row-span-2" faded={focused}>
            <span className="text-5xl font-bold text-red-900">Aa</span>
          </DesignCard>

         
          <div
            className={`
              col-start-2 row-start-4 row-span-1 z-10 transition-transform duration-700 ease-in-out
              ${focused ? 'scale-[2.2] -translate-y-4' : 'scale-100 translate-y-0'}
            `}
          >
            <DesignCard title="" color="bg-blue-600">
              <LogoIcon className="w-6 h-6 text-white" />
            </DesignCard>
          </div>

          <DesignCard title="Iconograph" color="bg-lime-500" className="col-start-1 row-start-4 row-span-2" faded={focused}>
            <Lock className="w-10 h-10 text-gray-800" />
          </DesignCard>

          <DesignCard title="Color" color="bg-orange-400" className="col-start-2 col-span-2 row-start-5" faded={focused}>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-6 h-6 bg-amber-900 rounded-sm" />
              <div className="w-6 h-6 bg-amber-700 rounded-sm mt-6" />
            </div>
          </DesignCard>

          <DesignCard title="Imagery" color="bg-rose-400" className="col-start-1 row-span-2" faded={focused}>
            <div className="w-16 h-16 bg-pink-300 rounded-md relative overflow-hidden">
              <div className="absolute left-4 top-6 w-2 h-2 bg-pink-600 rounded-full" />
              <div className="absolute bottom-0 w-full h-6 bg-pink-600 rounded-t-2xl" />
            </div>
          </DesignCard>

          <DesignCard title="Motion" color="bg-purple-300" className="col-start-2 col-span-2 row-span-2" faded={focused}>
            <div className="flex flex-col items-center justify-center">
              <div className="flex justify-between w-1/2">
                <div className="w-2 h-2 bg-purple-700 rounded-full" />
                <div className="w-2 h-2 bg-purple-700 rounded-full" />
              </div>
              <div className="w-1/2 h-px bg-purple-700 rotate-45 my-4" />
              <div className="flex justify-between w-1/2">
                <div className="w-2 h-2 bg-purple-700 rounded-full" />
                <div className="w-2 h-2 bg-purple-700 rounded-full" />
              </div>
            </div>
          </DesignCard>

        </div>
      </div>
    </div>
  );
};

export default Responsive;
