import './App.css'
import { useState, useEffect } from 'react';

import Options from './options/Options';
import Feedback from './feedback/Feedback';
import Notification from './notification/Notification';



const App = () => {

//стан відгуків за замовченням
const initialState = { good: 0, neutral: 0, bad: 0 };  
  
  // Стан зберігання типів відгуків
  const [feedback, setFeedback] = useState(initialState);

  //Cтан що визначає наявність відгуків
  const [hasFeedback, setHasFeedback] = useState(false);

  // Зчитування даних з локального сховища при завантаженні сторінки
  useEffect(() => {    
    const storedFeedback = JSON.parse(localStorage.getItem('feedback'));

    if (storedFeedback) {
      setFeedback(storedFeedback);
      setHasFeedback(true);
    }
  }, []);


  // Збереження даних у локальному сховищі при зміні стану, метод setItem() інтерфейсу Storage при передачі Storageобъекту (імені, значения) додає ключ 'feedback' чи оновлює його значення на  [feedback].  
  useEffect(() => {   
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);


  //ф-ція зміни стану відгуків
  const updateFeedback = (feedbackType) => {    
    setFeedback((prevFeedback) => ({...prevFeedback, [feedbackType]: prevFeedback[feedbackType] + 1,}));
    setHasFeedback(true);    
  };

    // Загальна кількість відгуків (піднімання стану)
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    // Підрахунок відсотка позитивних відгуків
  const percentagePositiveFeedback = Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100) + "%";
  
    const resetFeedback = () => {
    setFeedback(initialState);
    // setHasFeedback(false);
  };
  

  return (
    <div className='container'>      
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>      
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback } />      
      {totalFeedback? < Feedback type="Good" count={feedback.good} />: <Notification/> }     
      {totalFeedback !==0 && <Feedback type="Neutral" count={feedback.neutral} />}
      {totalFeedback !==0 && <Feedback type="Bad" count={feedback.bad} />}
      {totalFeedback !==0 && <Feedback type="Total" count={totalFeedback} />}
      {totalFeedback !==0 && <Feedback type="Positive" count={percentagePositiveFeedback} />}
    </div>     
      
  );
};

export default App;
