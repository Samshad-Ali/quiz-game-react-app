import React, { useContext,useState } from "react";
import { context } from "..";
import {AiFillCaretLeft} from "react-icons/ai";
import toast from "react-hot-toast";
const Quiz = () => {
  const { quizData } = useContext(context);
  const [queNext, setQueNext] = useState(0);
  const [score, setsCore] = useState(0);
  const [getAns, setGetAns] = useState("");
  const [quesNo, setQuesNo] = useState(1);
  const {setStart} = useContext(context);

  const handlePrevBtn = () => {
    if (queNext <= 0) {
     return toast.error("Can't go back after 1")
      
    }
    if(quizData[queNext].correctAnswer===getAns){
      setsCore(score-1)
    }
    setQueNext(queNext - 1);
    setQuesNo(quesNo - 1);
  };
  const handleNextBtn = () => {
    
    if (quizData[queNext].correctAnswer === getAns) {
      setsCore(score + 1);
      setQuesNo(quesNo + 1);
      return setQueNext(queNext + 1);
    }
    setQuesNo(quesNo + 1);
    setQueNext(queNext + 1);
  };
  return (
    <>
    <div className="w-full h-screen start-div">
      {
        quesNo<=10 ? 
      <div className="w-full h-full sm:p-0 p-1 bg-black bg-opacity-80 flex flex-col justify-center items-center">
        <div className="text-white p-4 flex flex-col gap-4 justify-center items-center rounded-sm sm:w-1/2 w-full h-[280px] bg-black bg-opacity-50 shadow-inner shadow-black">
          <p className="break-words self-start font-semibold ">
            {`Ques. ${quesNo}/10 ${quizData[queNext].question}`}
          </p>
          <div className="w-full flex-wrap flex flex-col gap-4 justify-center items-center">
            <div className="w-full flex gap-4">
              <button
                className="w-1/2 border border-orange-700 rounded-sm text-orange-700 uppercase md:p-2 p-1 hover:bg-orange-700 hover:text-white text-sm sm:text-base sm:font-semibold duration-200 ease-in-out"
                
                onClick={() => {setGetAns(quizData[queNext].options[0])
                }}
              >
                {quizData[queNext].options[0]}
              </button>
              <button
                className="w-1/2 border border-orange-700 rounded-sm text-orange-700 uppercase md:p-2 p-1 hover:bg-orange-700 hover:text-white text-sm sm:text-base sm:font-semibold duration-200 ease-in-out"
                
                onClick={() => {setGetAns(quizData[queNext].options[1])
                }}
              >
                {quizData[queNext].options[1]}
              </button>
            </div>
            <div className="w-full flex gap-4">
              <button
                className="w-1/2 border border-orange-700 rounded-sm text-orange-700 uppercase md:p-2 p-1 hover:bg-orange-700 hover:text-white text-sm sm:text-base sm:font-semibold duration-200 ease-in-out"
                
                onClick={() => {setGetAns(quizData[queNext].options[2])
                }}
              >
                {quizData[queNext].options[2]}
              </button>
              <button
                className="w-1/2 border border-orange-700 rounded-sm text-orange-700 uppercase md:p-2 p-1 hover:bg-orange-700 hover:text-white text-sm sm:text-base sm:font-semibold duration-200 ease-in-out"
                
                onClick={() => {setGetAns(quizData[queNext].options[3])
                }}
              >
                {quizData[queNext].options[3]}
              </button>
            </div>
            <div className="w-full mt-4 flex justify-between">
              <button
                className={` bg-teal-600 hover:bg-teal-800 duration-200 p-1 px-2 rounded-sm`}
                onClick={handlePrevBtn}
              >
                <AiFillCaretLeft />
              </button>
          
              <button
                className={` bg-teal-600 hover:bg-teal-800 duration-200 p-1 px-2 rounded-sm`}
                onClick={handleNextBtn}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      :
      <div className="w-full h-full bg-black bg-opacity-80 flex justify-center items-center ">
        <div className="bg-white rounded-sm flex flex-col gap-4 items-center p-4">
                <h1 className="text-xl font-semibold">Your Score is {score}/10</h1>
                <button className='border-2 border-gray-900 text-gray-900 text-xl uppercase hover:scale-105 duration-300 bg-white rounded-md p-2 px-6 font-bold'
                onClick={()=>{setStart(false)}}
        >Play Again</button>
        </div>
      </div>
      }
    </div>
    </>

  );
};

export default Quiz;
