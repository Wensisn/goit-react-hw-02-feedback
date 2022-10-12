import css from './Option.module.css';

export const FedbackOptions = ({ stepGood, stepNeutral, stepBad }) => {
  return (
    <>
      <h2 className={css.title}>Please leave FadBack</h2>
      <div className={css.sectionsFedback}>
        <button className={css.button} onClick={stepGood}>
          Good
        </button>
        <button className={css.button} onClick={stepNeutral}>
          Neutral
        </button>
        <button className={css.button} onClick={stepBad}>
          Bad
        </button>
      </div>
    </>
  );
};
