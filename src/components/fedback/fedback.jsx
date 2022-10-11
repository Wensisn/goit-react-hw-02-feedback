import { Component } from 'react';
import css from './fedback.module.css';

export default class FedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  stepIncrementGood = () => {
    this.setState(propStep => {
      return {
        good: propStep.good + 1,
      };
    });
  };
  stepIncrementNeutral = () => {
    this.setState(propStep => {
      return {
        neutral: propStep.neutral + 1,
      };
    });
  };

  stepIncrementBad = () => {
    this.setState(propStep => {
      return {
        bad: propStep.bad + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    if (!this.state.good) {
      return 0;
    }
    return ((this.state.good * 100) / this.countTotalFeedback()).toFixed(2);
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h2 className={css.title}>Please leave FadBack</h2>
        <div className={css.sectionsFedback}>
          <button className={css.button} onClick={this.stepIncrementGood}>
            Good
          </button>
          <button className={css.button} onClick={this.stepIncrementNeutral}>
            Neutral
          </button>
          <button className={css.button} onClick={this.stepIncrementBad}>
            Bad
          </button>
        </div>
        <h2 className={css.title}>Statistics</h2>
        <div className={css.sectionsResults}>
          <p className={css.result}>Good:{good}</p>
          <p className={css.result}>Neutral:{neutral}</p>
          <p className={css.result}>Bad:{bad}</p>
          <p className={css.result}>Total:{this.countTotalFeedback()}</p>
          <p className={css.result}>
            Positiv Fedback:{this.countPositiveFeedbackPercentage()}%
          </p>
        </div>
      </div>
    );
  }
}
