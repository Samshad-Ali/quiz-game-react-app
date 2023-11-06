import React, { createContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { quizData as Data } from './assets/data';
const root = ReactDOM.createRoot(document.getElementById('root'));
export const context = createContext();
const AppWrapper=()=>{
  const [quizData,setQuizData]=useState([]);
  const [start,setStart]=useState(false);
  useEffect(()=>{
    setQuizData(Data);
  },[])
  return (
    <context.Provider value={{
      quizData,setQuizData,start,setStart
    }}>
    <App/>
    </context.Provider>
  )
}
root.render(
  <React.StrictMode>
    <AppWrapper/>
  </React.StrictMode>
);

