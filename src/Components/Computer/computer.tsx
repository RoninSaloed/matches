import "./computer.css"
import { ComputerProps } from "./computer.props"



export const Computer = ({ computer }: ComputerProps): JSX.Element => {

    return (
        <div className="Computer">
            <div className="computerImg"></div>
            <div className="computerScore">Computer`s amount: {computer.length}</div>
        </div>
    )
}