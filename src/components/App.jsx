import { useEffect, useState } from 'react';
import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState(
    JSON.parse(localStorage.getItem('feedback')) || {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  );

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback)), [feedback];
  });

  const feedBackUpdate = option => {
    setFeedback(prev => ({ ...prev, [option]: prev[option] + 1 }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const positiveFeedback = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  return (
    <div>
      <Description />
      <Options leaveFeedBack={feedBackUpdate} reset={resetFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          stats={feedback}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification message={'No feedback given'} />
      )}
    </div>
  );
};
export default App;
