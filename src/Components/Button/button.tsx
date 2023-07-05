import React, { useEffect, useState } from "react"
import "./button.css"
import { ButtonProps } from "./button.props"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHippo } from '@fortawesome/free-solid-svg-icons'



export const Button = ({ transferToUser, selected, matches }: ButtonProps): JSX.Element => {
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(false)
    const [disable, setDisable] = useState<string>("buttonActive")
    const checkButtonDisabled = () => {
        if (selected.length == 0) {
            setButtonDisabled(true)
            setDisable("buttonDisable")
        } else {
            setButtonDisabled(false)
            setDisable("buttonActive")
        }
    }
    const restartGame = () => {
        window.location.reload();
    }
    useEffect(() => {
        checkButtonDisabled()
    }, [selected])
    if (matches.length == 0) {
        return <div className="Button"><div className="buttonBody"><button onClick={restartGame} className="buttonActive">restart</button></div></div>
    }
    return (
        <div className="Button">
            <div className="buttonBody">
                <button disabled={buttonDisabled} className={disable} onClick={transferToUser}>Finish turn</button>
            </div>
        </div>
    )
}