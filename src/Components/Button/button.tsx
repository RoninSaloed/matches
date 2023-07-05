import React, { useEffect, useState } from "react"
import "./button.css"
import { ButtonProps } from "./button.props"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHippo } from '@fortawesome/free-solid-svg-icons'



export const Button = ({ transferToUser }: ButtonProps): JSX.Element => {

    return (
        <div className="Button">
            <div className="buttonBody">
                <button className="buttonActive" onClick={transferToUser}>Finish turn</button>

            </div>
        </div>
    )
}