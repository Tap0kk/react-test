const Options = ({ leaveFeedBack, reset }) => {
  return (
    <>
      <button onClick={() => leaveFeedBack('good')}>Good</button>
      <button onClick={() => leaveFeedBack('neutral')}>Neutral</button>
      <button onClick={() => leaveFeedBack('bad')}>Bad</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Options;
