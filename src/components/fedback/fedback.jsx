// import { Component } from 'react';
// import { Statistics } from '../Statistics/Statistics';
// import { FedbackOptions } from '../FeedbackOptions/FeedbackOptions';
// import { Section } from '../Section/Section';

// export default class FedBack extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   stepIncrementGood = () => {
//     this.setState(propStep => {
//       return {
//         good: propStep.good + 1,
//       };
//     });
//   };
//   stepIncrementNeutral = () => {
//     this.setState(propStep => {
//       return {
//         neutral: propStep.neutral + 1,
//       };
//     });
//   };

//   stepIncrementBad = () => {
//     this.setState(propStep => {
//       return {
//         bad: propStep.bad + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     if (!this.state.good) {
//       return 0;
//     }
//     return ((this.state.good * 100) / this.countTotalFeedback()).toFixed(2);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <div>
//         <Section title="Please leave FadBack">
//           <FedbackOptions
//             stepGood={this.stepIncrementGood}
//             stepNeutral={this.stepIncrementNeutral}
//             stepBad={this.stepIncrementBad}
//           />
//         </Section>
//         <Section title="Statistics">
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             onFedbackTotal={this.countTotalFeedback}
//             onFedbackPercentage={this.countPositiveFeedbackPercentage}
//           />
//         </Section>
//       </div>
//     );
//   }
// }
