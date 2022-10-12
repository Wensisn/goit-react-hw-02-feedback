import Notification from '../Notification/Notification';
import css from './Statistics.module.css';

export const Statistics = ({
  title,
  good,
  neutral,
  bad,
  onFedbackTotal,
  onFedbackPercentage,
}) => {
  const total = onFedbackTotal();

  return (
    <>
      {!!total ? (
        <>
          <h2 className={css.title}>{title}</h2>
          <div className={css.sectionsResults}>
            <p className={css.result}>Good:{good}</p>
            <p className={css.result}>Neutral:{neutral}</p>
            <p className={css.result}>Bad:{bad}</p>
            <p className={css.result}>Total:{onFedbackTotal()}</p>
            <p className={css.result}>
              Positiv Fedback:{onFedbackPercentage()}%
            </p>
          </div>
        </>
      ) : (
        <Notification message={'No feedback given'} />
      )}
    </>
  );
};
