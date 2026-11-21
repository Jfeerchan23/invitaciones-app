import 'react';
import { useOnScreen } from '../hooks/useOnScreen';

export function FadeInSection({
  children,
  className = '',
  delay = '',
  immediate = false,
}) {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const shown = immediate || isVisible;

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        shown
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      } ${delay} ${className}`}
    >
      {children}
    </div>
  );
}