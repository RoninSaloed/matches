import "./matches.css"
import { MatchesProps } from "./matches.props"




export const Matches = ({ matches, selected, choiceCandle, user }: MatchesProps): JSX.Element => {
    if (matches.length == 0) {
        if (user.length % 2 == 0) {
            return <div className="playerWin">User win</div>
        }
        else if (user.length % 2 == 1) {
            return <div className="computerWin">Computer win</div>
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
                        <span className="candle">🧨</span>
                    </div>
                ))}
            </div>
        </div>
    )
}