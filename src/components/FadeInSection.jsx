import 'react';
import { useOnScreen } from '../hooks/useOnScreen';

export function FadeInSection({ children, className = "", delay = "" }) {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      } ${delay} ${className}`}
    >
      {children}
    </div>
  );
}