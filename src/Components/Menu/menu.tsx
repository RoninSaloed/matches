import React, { useEffect, useState } from "react"
import "./menu.css"
import { MenuProps } from "./menu.props"




export const Menu = ({ setMatchesLength, matchesLength }: MenuProps): JSX.Element => {
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
    return (
        <div className="Menu">
            <div>

                <div className="settingsNumber">
                    <div className="arrowLeft" onClick={lenghtDecrease}></div>

                    <input type="number" readOnly max={51} min={11} value={matchesLength} onChange={handleMatchesLengthChange} />
                    <div className="arrowRight" onClick={lenghtIncrease}></div>

                </div>

                <div className="settingsMode"></div>
            </div>
        </div>
    )
}