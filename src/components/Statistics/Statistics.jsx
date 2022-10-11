import FedBack from 'components/fedback/fedback';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  onFedbackTotal,
  onFedbackPercentage,
}) => {
  return (
    <>
      <h2 className={css.title}>Statistics</h2>
      <div className={css.sectionsResults}>
        <p className={css.result}>Good:{good}</p>
        <p className={css.result}>Neutral:{neutral}</p>
        <p className={css.result}>Bad:{bad}</p>
        <p className={css.result}>Total:{() => onFedbackTotal}</p>
        <p className={css.result}>
          Positiv Fedback:{() => onFedbackPercentage}%
        </p>
      </div>
    </>
  );
};
