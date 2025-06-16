import { useEffect, useRef } from 'react';

export const Anchor = ({ id } : {id : string}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (window.location.hash !== `#${id}`) return;
    ref.current.scrollIntoView();
  }, [ref, id]);

  return <div ref={ref} />;
};