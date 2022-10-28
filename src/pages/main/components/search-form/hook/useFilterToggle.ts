import { useEffect, useRef, useState } from 'react';

interface IUseFilterToggle {
  filterMenuRef: React.RefObject<HTMLDivElement>;
  buttonFilterRef: React.RefObject<HTMLButtonElement>;
  setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
  openFilter: boolean;
}

export function useFilterToggle(): IUseFilterToggle {
  const [openFilter, setOpenFilter] = useState(false);
  const filterMenuRef = useRef<HTMLDivElement>(null);
  const buttonFilterRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClick = (e: Event): void => {
      if (!(e.target instanceof HTMLElement)) {
        return;
      }

      if (
        !filterMenuRef.current?.contains(e.target)
        && !buttonFilterRef.current?.contains(e.target)
        && openFilter
      ) {
        setOpenFilter(false);
      }
    };

    document.addEventListener('click', handleClick);

    return (() => document.removeEventListener('click', handleClick));
  }, [openFilter]);

  return {
    filterMenuRef,
    buttonFilterRef,
    setOpenFilter,
    openFilter,
  };
}
