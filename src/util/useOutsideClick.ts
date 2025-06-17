import { RefObject, useEffect } from 'react';

export function useOutsideClick<T extends HTMLElement | null>(ref : RefObject<T> | null, handle : () => void) {
  useEffect(() => {
    const handleClickOutside = (event : MouseEvent) => {
      if (!ref?.current || !event?.target) return;
      if (!ref.current.contains(event.target as Node)) handle();
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handle]);
}
