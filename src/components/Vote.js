import { useState } from "react";

const Vote = (props) => {
    const { score } = props;
    const [value, setValue] = useState(score);
    const [vote, setVote] = useState(score);

    const increaseScore = () => {
        setValue(score + 1);
        setVote(score + 1);
    }
    const decreaseScore = () => {
        if (vote > 0) {
            setVote(value - 1)
        }

    }
    return (
        <div className="vote rounded p-[1rem] mx-[1rem] bg-voteButton flex flex-col items-center">
            <button className="text-button font-bold" onClick={() => increaseScore()}>+</button>
            <span className="text-vote font-bold">{vote}</span>
            <button className="text-button font-bold" onClick={() => decreaseScore()}>-</button>
        </div>
    )
}
export default Vote;