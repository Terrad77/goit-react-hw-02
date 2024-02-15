import './App.css'
import { useState, useEffect } from 'react';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

const App = () => {
//object стану відгуків за замовченням
const initialState = { good: 0, neutral: 0, bad: 0 };  
  
  //функція читання з локального сховища та зміни початкового значення useState стану 
  const [feedback, setFeedback] = useState(() => {
    // Зчитуємо значення за ключем
      const storedFeedback = window.localStorage.getItem('feedback');
    // Якщо є відгуки, парсимо і повертаємо це значення як початкове значення стану
    if (storedFeedback  !== null) {
      return JSON.parse(storedFeedback);      
    }
    //повертаємо значення за замовчуванням
    return initialState;
  });


  // Збереження даних у локальному сховищі при зміні стану
  useEffect(() => {   
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);


  //ф-ція зміни стану відгуків
  const updateFeedback = (feedbackType) => {    
    setFeedback((prevFeedback) => ({...prevFeedback, [feedbackType]: prevFeedback[feedbackType] + 1,}));        
  };

    // Загальна кількість відгуків
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

    // Підрахунок відсотка позитивних відгуків
  const positiveFeedback = Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100) + "%";
  
   // Функція скидання відгуків
    const resetFeedback = () => {
    setFeedback(initialState);    
  };  

  return (
    <div className='container'>      
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>      
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback } />      
      {totalFeedback? (<Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />) : (<Notification />) } 
    </div>    
      
  );
};

export default App;
