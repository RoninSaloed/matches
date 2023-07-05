import React, { useEffect, useState } from "react"
import "./menu.css"
import { MenuProps } from "./menu.props"




export const Menu = ({ setMatchesLength, matchesLength, isUserTurn, setIsUserTurn }: MenuProps): JSX.Element => {
    const [currentPlayer, setCurrentPlayer] = useState<boolean>(false)
    const [nameCurrent, setNameCurrent] = useState<string>("user")
    const [buttonDisableComputer, setButtonDisableComputer] = useState<boolean>(false)
    const [buttonDisableUser, setButtonDisableUser] = useState<boolean>(true)

    const handleMatchesLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setMatchesLength(parseInt(value));
    };

    const lenghtIncrease = () => {
        let maxLenght = 53
        if (matchesLength <= maxLenght) {
            setMatchesLength((matchesLength: any) => matchesLength + 2);
        }

    };
    const lenghtDecrease = () => {
        let minLenght = 13
        if (matchesLength >= minLenght) {
            setMatchesLength((matchesLength: any) => matchesLength - 2);
        }
    };
    const modeTurnPc = () => {
        setCurrentPlayer(true)
        setNameCurrent("computer")
        setIsUserTurn(true)

    }
    const modeTurnUser = () => {
        setCurrentPlayer(false)
        setNameCurrent("user")
        setIsUserTurn(false)
        if (currentPlayer == false) {
            setButtonDisableUser(false)
        } else {
            setButtonDisableUser(false)
        }
    }
    useEffect(() => {
        if (currentPlayer == true) {
            setButtonDisableComputer(true)
        } else {
            setButtonDisableComputer(false)
        }
    }, [currentPlayer])

    return (
        <div className="Menu">
            <div className="menuBody">

                <div className="settingsNumber">
                    <div className="arrowLeft" onClick={lenghtDecrease}></div>

                    <input type="number" className="lenghtSettings" readOnly max={51} min={11} value={matchesLength} onChange={handleMatchesLengthChange} />
                    <div className="arrowRight" onClick={lenghtIncrease}></div>

                </div>
                <div className="settingsMode">
                    <button disabled={buttonDisableUser} className="arrowLeftMode" onClick={modeTurnUser} ></button>

                    <div className="modeSettings">{nameCurrent}</div>
                    <button disabled={buttonDisableComputer} className={buttonDisableComputer == true ? "arrowRightModeDisable" : "arrowRightMode"} onClick={modeTurnPc}></button>
                </div>
            </div>
        </div>
    )
}