import React, { useEffect, useState } from 'react';
import './App.css';
import { Menu } from './Components/Menu/menu';
import { Matches } from './Components/Matches/matches';
import { Button } from './Components/Button/button';




function App() {
  const [user, setUser] = useState<number[]>([]);
  const [computer, setComputer] = useState<number[]>([]);
  const [turn, setTurn] = useState<boolean>(true)
  const maxSelected = 3;
  const minSelected = 1
  const [matchesLength, setMatchesLength] = useState(11);
  const [matches, setMatches] = useState<number[]>(Array.from({ length: matchesLength }, (_, index) => index));
  const [selected, setSelected] = useState<number[]>([]);

  const turnComputer = () => {

    if (matches.length <= maxSelected) {
      setComputer((prevComputer) => [...prevComputer, ...matches]);
      setMatches([]);
      return;
    }

    const elementsToRemove = Math.floor(Math.random() * (maxSelected - minSelected + 1)) + minSelected;

    setMatches((prevMatches) => {
      const remainingMatches = [...prevMatches];
      const removedElements: number[] = [];

      for (let i = 0; i < elementsToRemove; i++) {

        const randomIndex = Math.floor(Math.random() * remainingMatches.length);
        const removedElement = remainingMatches.splice(randomIndex, 1)[0];
        removedElements.push(removedElement);
      }

      if (removedElements.length > 0) {
        setComputer((prevComputer) => [...prevComputer, ...removedElements]);
      }

      return remainingMatches;
    });
  }
  const choiceCandle = (index: number) => {
    if (selected.includes(index)) {
      setSelected((prevSelected) => prevSelected.filter((_, index) => index !== index));
    } else if (selected.length < maxSelected) {
      setSelected((prevSelected) => [...prevSelected, index]);
    }
  }

  const transferToUser = () => {
    setUser((prevUser) => [...prevUser, ...selected]);
    setMatches((prevMatches) => prevMatches.filter((_, index) => !selected.includes(index)));
    setSelected([]);
    if (matches.length > 0) {
      setTimeout(turnComputer, 1500);
    }
  }
  console.log(user.length)
  console.log(computer.length)

  useEffect(() => {
    setMatches((prevMatches) => {
      if (prevMatches.length !== matchesLength) {
        return Array.from({ length: matchesLength }, (_, index) => index);
      }
      return prevMatches;
    });
  }, [matchesLength]);

  useEffect(() => {

  }, [selected]);

  useEffect(() => {
    if (matches.length === 0) {
      return; // Не отрабатывать функцию turnComputer, если matches пустой
    }


  }, [matches]);

  return (
    <div className="App">
      <Menu setMatchesLength={setMatchesLength} matchesLength={matchesLength} />
      <Matches user={user} matches={matches} selected={selected} choiceCandle={choiceCandle} />
      <Button transferToUser={transferToUser} />
    </div>
  );
}

export default App;
