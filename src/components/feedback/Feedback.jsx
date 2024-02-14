// import "./Feedback.css";



const Feedback = ({ type, count }) => {
  

  return (
    
    <ul className={'feedbackList'}>
      <li className={'feedbackItem'}>{type}:{" "}{count} </li>      
    </ul>
  )
};

export default Feedback;
