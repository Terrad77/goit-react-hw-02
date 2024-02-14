//імпорт CSS
import "./Options.css";

const Options = ({ updateFeedback, resetFeedback, hasFeedback }) => {

  return (        
  <ul className={'optionsList'}>
    <button className={'optionsBtn'} onClick={() => updateFeedback('good')}>Good</button>
    <button className={'optionsBtn'} onClick={() => updateFeedback  ('neutral')}>Neutral</button>
    <button className={'optionsBtn'} onClick={() => updateFeedback('bad')}>Bad</button>
    {hasFeedback && (<button className={'optionsBtn'} onClick={resetFeedback}>Reset</button>)}      
  </ul>  
)
};

export default Options;