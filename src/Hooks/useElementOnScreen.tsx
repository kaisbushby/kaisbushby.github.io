import * as React from 'react'

export const useElementOnScreen = () : [React.RefObject<any>, boolean] => {
    const [isIntersecting, setIsIntersecting] = React.useState<boolean>(false);
    const containerRef = React.useRef<any>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsIntersecting(entry.isIntersecting);
          }
        );

        if(containerRef.current)
            observer.observe(containerRef.current)
        
        return () => {
            if(containerRef.current)
                observer.unobserve(containerRef.current)
        }
      }, [isIntersecting, containerRef]);

      return [containerRef, isIntersecting]
}