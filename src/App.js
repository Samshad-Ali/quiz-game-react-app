import React, { useContext } from 'react';
import { context } from '.';
import Quiz from './Components/Quiz';
import StartPage from './Components/StartPage';
import {Toaster} from 'react-hot-toast'
function App() {
  const {start} = useContext(context)
  return (
   <div className='w-full h-screen flex flex-col gap-4 justify-center items-center'>
    <Toaster/>
    {
      start ? <Quiz/> : <StartPage/>
    }
   </div>
  );
}

export default App;
