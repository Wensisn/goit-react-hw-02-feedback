import { Component } from 'react';
import React from 'react';
import { Statistics } from './Statistics/Statistics';
import { FedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  saveFeedback = grade => {
    this.setState(prevState => ({ [grade]: prevState[grade] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (!this.state.good) {
      return 0;
    }
    return ((this.state.good * 100) / this.countTotalFeedback()).toFixed(2);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (
      <div>
        <Section title="Please leave feedback">
          <FedbackOptions stepFunc={this.saveFeedback} options={options} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            onFedbackTotal={this.countTotalFeedback}
            onFedbackPercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}
