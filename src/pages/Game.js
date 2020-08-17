import React from "react";
import { useState, useEffect } from "react";
import {
  StyledGame,
  StyledScore,
  StyledTimer,
  StyledCharacter
} from "../styled/Game";
import { useScore } from "../contexts/ScoreContext";

export default function Game({ history }) {
  const [score, setScore] = useScore(0);
  const max_seconds = 5;
  const [ms, setMs] = useState(0);
  const [seconds, setSeconds] = useState(max_seconds);
  const [currentCharacter, setCurrentCharacter] = useState("");
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  useEffect(() => {
    setRandomCharacter();
    setScore(0);
    const currentTime = new Date();
    const interval = setInterval(() => updateTime(currentTime), 1);
    return () => {
      clearInterval(interval);
    };
  }, [updateTime]);

  const updateTime = (startTime) => {
    const endTime = new Date();
    const msPassedStr = (endTime.getTime() - startTime.getTime()).toString();
    const formattedMSString = ("0000" + msPassedStr).slice(-5);
    const updatedSeconds =
      max_seconds - parseInt(formattedMSString.substring(0, 2)) - 1;
    const updatedMs =
      1000 -
      parseInt(formattedMSString.substring(formattedMSString.length - 3));

    setSeconds(addLeadingZeros(updatedSeconds, 2));
    setMs(addLeadingZeros(updatedMs, 3));
  };
  const addLeadingZeros = (num, length) => {
    let zeros = "";
    for (let i = 0; i < length; i++) {
      zeros += "0";
    }
    return (zeros + num).slice(-length);
  };

  useEffect(() => {
    if (seconds <= 0 && ms <= 100) {
      // (seconds <= -1)
      history.push("/gameover");
    }
  }, [seconds, ms, history]);

  const keyUpHandler = (e) => {
    if (e.key === currentCharacter) {
      setScore((prevScore) => prevScore + 1);
    } else {
      if (score > 0) {
        setScore((prevScore) => prevScore - 1);
      }
    }
    setRandomCharacter();
  };

  useEffect(() => {
    document.addEventListener("keyup", keyUpHandler);
    return () => {
      document.removeEventListener("keyup", keyUpHandler);
    };
  }, [keyUpHandler]);

  const setRandomCharacter = () => {
    const randomInt = Math.floor(Math.random() * 36);

    setCurrentCharacter(characters[randomInt]);
  };

  return (
    <StyledGame>
      <StyledScore>Score: {score}</StyledScore>
      <StyledCharacter>{currentCharacter}</StyledCharacter>
      <StyledTimer>{`Time: ${seconds}:${ms}`}</StyledTimer>
    </StyledGame>
  );
}
