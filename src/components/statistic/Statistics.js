import React from 'react';
import PropTypes from 'prop-types';
import StatisticsItem from './statisticListItem/StatisticsItem';
import styles from './Statistic.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {stats.map(stat => (
          <StatisticsItem key={stat.id} {...stat} />
        ))}
      </ul>
    </section>
  );
}

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

// Компонент должен принимать два пропа title и stats, в которых указывается заголовок и объект статистики.

// title - не обязателен, и если он не передан, не должна рендериться разметка заголовка <h2>.
// stats - массив объектов содержащих информацию о элементе статистики. Может иметь произвольное кол-во элементов.
// Цвет фона элемента статистики в оформлении можно пропустить, либо создать функцию для генерации случайного цвета.
// Компонент должен создавать DOM элемент следующей структуры.
