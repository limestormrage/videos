import React from 'react';
import cn from 'classnames';
import styles from './search-form.module.scss';
import { ReactComponent as SearchIcon } from './search.svg';
import { ReactComponent as FilterIcon } from './filter.svg';
import { ReactComponent as ResetIcon } from './reset.svg';

function SearchForm(): JSX.Element {
  return (
    <div className={styles.searchForm}>
      <div className={styles.searchIconWrapper}>
        <SearchIcon
          className={styles.searchIcon}
          width="19px"
          height="19px"
        />
      </div>
      <div className={styles.searchControls}>
        <button
          className={cn(styles.searchButton, styles.searchButtonParams)}
          type="button"
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
          />
        </button>
      </div>
      <form autoComplete="off">
        <input
          className={styles.searchInput}
          type="search"
          autoCorrect="off"
          autoCapitalize="off"
          placeholder="Поиск видео"
        />
      </form>
    </div>
  );
}

export default SearchForm;
