import React, { useEffect, useState } from "react"
import "./matches.css"
import { MatchesProps } from "./matches.props"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHippo } from '@fortawesome/free-solid-svg-icons'



export const Matches = ({ matches, selected, choiceCandle, user }: MatchesProps): JSX.Element => {
    if (matches.length === 0) {
        if (user.length % 2 === 0 && user.length != 0) {
            return <div>Player win</div>
        }
        else if (user.length % 2 === 1) {
            return <div>Computer win</div>

        }
    }

    return (
        <div className="Matches">
            <div className="matchesBody">
                {matches.map((match, index) => (
                    <div
                        key={index}
                        onClick={() => choiceCandle(index)}
                        className={`candle ${selected.includes(index) ? "selected" : ""}`}
                    >
                        <div className="candle"><FontAwesomeIcon icon={faHippo} /></div>
                    </div>
                ))}
            </div>
        </div>
    )
}