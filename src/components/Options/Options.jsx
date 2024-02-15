//імпорт CSS
import "./Options.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {

  return (        
  <ul className={'optionsList'}>
    <button className={'optionsBtn'} onClick={() => updateFeedback('good')}>Good</button>
    <button className={'optionsBtn'} onClick={() => updateFeedback  ('neutral')}>Neutral</button>
    <button className={'optionsBtn'} onClick={() => updateFeedback('bad')}>Bad</button>
    {totalFeedback !== 0 && (<button className={'optionsBtn'} onClick={resetFeedback}>Reset</button>)}      
  </ul>  
  )
};

export default Options;