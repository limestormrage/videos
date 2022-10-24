import React, { ChangeEvent, useEffect, useState } from 'react';
import cn from 'classnames';
import styles from './search-form.module.scss';
import { ReactComponent as SearchIcon } from './search.svg';
import { ReactComponent as FilterIcon } from './filter.svg';
import { ReactComponent as ResetIcon } from './reset.svg';
import SearchFilter from '../search-filter/search-filter';

const initialState = '';

function SearchForm(): JSX.Element {
  const [searchState, setSearchState] = useState(initialState);
  const [isSearching, setIsSearching] = useState<boolean>(Boolean(searchState));
  const [openFilter, setOpenFilter] = useState(false);

  const handleSearch = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;

    setSearchState(value);
  };

  const resetSearchForm = (): void => {
    setSearchState(initialState);
  };

  useEffect(() => {
    setIsSearching(Boolean(searchState));
  }, [searchState]);

  return (
    <div className={styles.searchForm}>
      <div className={styles.searchIconWrapper}>
        <SearchIcon
          className={styles.searchIcon}
          width="19px"
          height="19px"
        />
      </div>
      {isSearching && (
      <div className={styles.searchControls}>
        <button
          className={cn(styles.searchButton, styles.searchButtonParams)}
          type="button"
          onClick={() => setOpenFilter(!openFilter)}
        >
          <span className={styles.searchButtonText}>Фильтры</span>
          <FilterIcon
            className={styles.filterIcon}
            width="24px"
            height="24px"
          />
        </button>
        <button
          className={cn(styles.searchButton, styles.searchButtonReset)}
          type="button"
          aria-label="очистить поле поиска"
        >
          <ResetIcon
            className={styles.resetIcon}
            width="24px"
            height="24px"
            onClick={resetSearchForm}
          />
        </button>
      </div>
      )}
      <form autoComplete="off">
        <input
          className={styles.searchInput}
          type="text"
          autoCorrect="off"
          autoCapitalize="off"
          placeholder="Поиск видео"
          onChange={handleSearch}
          value={searchState}
        />
      </form>
      {openFilter && <SearchFilter />}
    </div>
  );
}

export default SearchForm;
