import React, { useEffect, useState } from 'react';
import './App.css';
import { Menu } from './Components/Menu/menu';
import { Matches } from './Components/Matches/matches';
import { Button } from './Components/Button/button';
import { Computer } from './Components/Computer/computer';
import { User } from './Components/User/user';




function App() {
  const [user, setUser] = useState<number[]>([]);
  const [computer, setComputer] = useState<any[]>([]);
  const [isUserTurn, setIsUserTurn] = useState(false);
  const maxSelected = 3;
  const minSelected = 1
  const [matchesLength, setMatchesLength] = useState<number>((JSON.parse(localStorage.getItem("lenght") || localStorage.lenght || 25)))
  const [matches, setMatches] = useState<number[]>(Array.from({ length: matchesLength }, (_, index) => index));

  const [selected, setSelected] = useState<number[]>([]);



  const choiceUser = (index: number) => {
    if (selected.includes(index)) {
      setSelected((prevSelected) => prevSelected.filter((_, index) => index !== index));
    } else if (selected.length < maxSelected) {
      setSelected((prevSelected) => [...prevSelected, index]);
    }
  }

  useEffect(() => {
    if (isUserTurn) {
      turnComputer(matches);
      setIsUserTurn(false);
    }
  }, [isUserTurn]);

  const turnUser = () => {
    setUser((prevUser) => [...prevUser, ...selected]);
    setMatches((prevMatches) => prevMatches.filter((_, index) => !selected.includes(index)));
    setSelected([]);

    setIsUserTurn(true);
  };
  const turnComputer = (currentMatches: number[]) => {
    console.log(currentMatches.length)
    let randomSelectionCount = 3;
    if (currentMatches.length > 0) {
      if (currentMatches.length > 7) {
        randomSelectionCount = Math.floor(Math.random() * maxSelected) + minSelected
        console.log("5")

      }
      else if (currentMatches.length <= 7 && currentMatches.length >= 5) {
        if (computer.length % 2 !== 0) {
          randomSelectionCount = 3;
        }
        else {
          randomSelectionCount = 1;
        }
        console.log("4")

      }
      else if (currentMatches.length <= 4 && currentMatches.length >= 3) {
        if (computer.length % 2 !== 0) {
          randomSelectionCount = 3;
        } else {
          randomSelectionCount = 2;

        }
        console.log("3")

      }
      else if (currentMatches.length == 2) {
        if (computer.length % 2 !== 0) {
          randomSelectionCount = 1;
        } else {
          randomSelectionCount = 2;
        }
        console.log("2")

      } else if (currentMatches.length == 1) {

        randomSelectionCount = 1;
        console.log("1")
      } else {
      }
    }
    const selectedMatches = matches.slice(-randomSelectionCount).reverse();
    setComputer((prevComputer) => [...prevComputer, ...selectedMatches]);
    setMatches((prevMatches) => prevMatches.slice(0, -randomSelectionCount));

  };


  console.log(user, "user")
  console.log(computer, "pc")

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
  }, [matches]);
  useEffect(() => {
    localStorage.setItem("lenght", JSON.stringify(matchesLength))
  }, [matchesLength])
  return (
    <div className="App">
      <div className='container'>
        <Menu setMatchesLength={setMatchesLength} matchesLength={matchesLength} isUserTurn={isUserTurn} setIsUserTurn={setIsUserTurn} />
        <div className='Middle'>
          <Computer computer={computer} />
          <Matches user={user} matches={matches} selected={selected} choiceCandle={choiceUser} />
          <User user={user} />
        </div>

        <Button selected={selected} transferToUser={turnUser} matches={matches} />
      </div>
    </div>
  );
}

export default App;
