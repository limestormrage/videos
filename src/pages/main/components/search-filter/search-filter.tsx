import React, { forwardRef } from 'react';
import styles from './search-filter.module.scss';

const SearchFilter = forwardRef<HTMLDivElement>((props, ref) => (
  <div className={styles.searchFilter} ref={ref}>
    <form action="">
      <div className={styles.searchFilterWrapper}>
        <div className={styles.formItem}>
          <p className={styles.itemTitle}>По длительности</p>
          <select className={styles.formSelector} name="duration" id="duration">
            <option value="">Любые</option>
            <option value="">Длинные</option>
            <option value="">Короткие</option>
          </select>
        </div>
        <div className={styles.formItem}>
          <p className={styles.itemTitle}>По дате</p>
          <select className={styles.formSelector} name="duration" id="duration">
            <option value="">За любое время</option>
            <option value="">За последние 24 часа</option>
            <option value="">За последнюю неделю</option>
            <option value="">За последний месяц</option>
            <option value="">За последний год</option>
          </select>
        </div>
        <div className={styles.formItem}>
          <p className={styles.itemTitle}>Сортировка</p>
          <select className={styles.formSelector} name="duration" id="duration">
            <option value="">По релевантности</option>
            <option value="">По дате</option>
            <option value="">По длительности</option>
          </select>
        </div>
        <fieldset className={styles.checkboxGroup}>
          <div>
            <input type="checkbox" id="1" />
            <label htmlFor="1"> Высокое качество</label>
          </div>
          <div>
            <input type="checkbox" id="2" />
            <label htmlFor="2"> Без ограничений</label>
          </div>
          <div>
            <input type="checkbox" id="3" />
            <label htmlFor="3"> Только трансляции</label>
          </div>
        </fieldset>
      </div>
    </form>
  </div>
));

export default SearchFilter;
