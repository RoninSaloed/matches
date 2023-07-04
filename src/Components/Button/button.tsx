import React, { useEffect, useState } from "react"
import "./button.css"
import { ButtonProps } from "./button.props"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHippo } from '@fortawesome/free-solid-svg-icons'



export const Button = ({ transferToUser }: ButtonProps): JSX.Element => {

    return (
        <div className="Button">
            <button onClick={transferToUser}>Finish try</button>
        </div>
    )
}