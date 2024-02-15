import "./Feedback.css";



const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  

  return (
    
    <ul className={'feedbackList'}>     
      <li className={'feedbackItem'}>Good: {feedback.good}</li>
      <li className={'feedbackItem'}>Neutral: {feedback.neutral}</li>
      <li className={'feedbackItem'}>Bad: {feedback.bad}</li>
      <li className={'feedbackItem'}>Total: {totalFeedback}</li>
      <li className={'feedbackItem'}>Positive: {positiveFeedback}</li>
    </ul>
  )
};

export default Feedback;