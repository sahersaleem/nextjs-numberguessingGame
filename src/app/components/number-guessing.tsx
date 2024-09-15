"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import React, { ChangeEvent } from "react";
import { useState, useEffect } from "react";
import {Input} from "../../components/ui/input";

const GuessNumber = () => {
  const [startGame, setStartGame] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [attempts, setAttempts] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);
  const [guess, setGuess] = useState<string | number>("");
  const [targetNumber , setISTargetNumber] = useState<number>(0)



useEffect(()=>{


if(startGame && !paused){
  const randomNumber:number =Math.floor(Math.random()*10)+1
  setISTargetNumber(randomNumber)
}

},[startGame,paused])







  
  const handleGameStart = () => {
    setGameOver(false);
    setStartGame(true);
    setPaused(false);
    setAttempts(0);
    setGameOver(false);
  };

  const handleResume = () => {
    setPaused(false);
  };

  const handlePause = () => {
    setPaused(true);
  };

const handleUserGuess = (e:ChangeEvent<HTMLInputElement>)=>{
  setGuess(parseInt(e.target.value))
}

const handleGuess = ()=>{
  if(typeof guess==="number" && guess===targetNumber){
    setGameOver(true)
  }
  else{
    setAttempts(()=>attempts+1)
  }
  setGuess("")
}
const handleTryAgain = ()=>{
  setStartGame(false)
  setPaused(false)
  setAttempts(0)
  setGuess("")
  setGameOver(false)
}
  return (
    <div className="flex items-center justify-center h-screen w-full ">
          <div> 
        <div className="w-[500px] h-[auto] bg-white rounded-md">
          <h1 className="text-center p-7 text-black text-3xl font-bold">
            Number Guessing Game
          </h1>
          <p className="text-center font-xl text-black">
            {" "}
            Try to guess the number between 1 and 10
          </p>
          {!startGame ? (
            <div className="flex justify-center items-center pt-6 pb-6">
              <button onClick={handleGameStart} className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                  start
                </div>
              </button>
            </div>
          ) : (
            ""
          )}
          {startGame && !gameOver && (
            <div>
              <div className="flex justify-center items-center pt-6">
                {paused ? (
                  <button onClick={handleResume} className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                      Resume
                    </div>
                  </button>
                ) : (
                  <button onClick={handlePause} className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                      Pause
                    </div>
                  </button>
                )}
              </div>
              <div className="pt-7 flex flex-cols justify-center items-center gap-2 rounded-sm border-black ">
                <Input
                className="text-black w-[300px] bg-gray-300"
                type="number"
                value={guess}
                onChange={handleUserGuess}
                placeholder="Enter your number"/>
                 <button onClick={handleGuess} className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-4 py-1  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                      Guess
                    </div>
                  </button>
              </div>
              <div className="text-black text-center text-lg p-6">
                Attempts:{attempts}
              </div>
            </div>
          )}

          {gameOver?<div className="text-lg font-semibold text-center">
            <div className="text-xl font-semibold text-center text-black p-5 ">
           Congratulations!You guess the number in {attempts}.
           </div>
            <div className="flex items-center justify-center p-5"><button onClick={handleTryAgain} className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-4 py-1  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                      Try Again
                    </div>
                  </button>
              </div></div>

:""}
        </div>
      </div>
    </div>
  );
};

export default GuessNumber;
