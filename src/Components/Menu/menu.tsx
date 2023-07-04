import React, { useEffect, useState } from "react"
import "./menu.css"
import { MenuProps } from "./menu.props"




export const Menu = ({ setMatchesLength, matchesLength }: MenuProps): JSX.Element => {
    const [errorMatches, setErrorMatches] = useState(false)
    const handleMatchesLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setMatchesLength(parseInt(value));
    };
    const matchesHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

    }
    return (
        <div className="Menu">
            <div>
                <input readOnly type="number" max={51} min={11} value={matchesLength} onChange={handleMatchesLengthChange} />
            </div>
        </div>
    )
}