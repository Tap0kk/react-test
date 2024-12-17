const Feedback = ({ stats, total, positive }) => {
  return (
    <ul>
      <li>Good: {stats.good}</li>
      <li>Neutral: {stats.neutral}</li>
      <li>Bad: {stats.bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {positive}%</li>
    </ul>
  );
};

export default Feedback;
