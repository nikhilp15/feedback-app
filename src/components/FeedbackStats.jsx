function FeedbackStats({ feedback }) {
  let average =
    feedback.reduce((acc, cur) => {
      return cur.rating + acc;
    }, 0) / feedback.length;

  average = isNaN(average) ? 0.0 : average;
  average = average.toFixed(1);

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {average}</h4>
    </div>
  );
}
export default FeedbackStats;
