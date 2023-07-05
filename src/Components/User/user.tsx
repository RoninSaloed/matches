import React, { useEffect, useState } from "react"
import "./user.css"
import { UserProps } from "./user.props"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHippo } from '@fortawesome/free-solid-svg-icons'



export const User = ({ user }: UserProps): JSX.Element => {

    return (
        <div className="User">
            <div className="userImg"></div>
            <div className="userScore">your amount: {user.length}</div>
        </div>
    )
}