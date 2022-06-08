import Card from "./shared/Card";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import { useState } from "react";

function FeedbackForm({ handleAddFeedback }) {
    const [text, setText] = useState("");
    const [rating, setRating] = useState(10);
    const [messege, setMessege] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const HandleTextchange = (e) => {
        if (text === "") {
            setMessege(null);
            setDisabled(true);
        } else if (text !== "" && text.trim().length <= 10) {
            setMessege("text should be atleast 10 characters long!");
            setDisabled(true);
        } else {
            setMessege(null);
            setDisabled(false);
        }
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            let newFeedback = {
                text: text,
                rating: rating,
            };
            handleAddFeedback(newFeedback);
            setText("");
        }
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h3>Please give rating</h3>
                <RatingSelect
                    select={(rating) => {
                        setRating(rating);
                    }}
                />
                <div className="input-group">
                    <input
                        onChange={HandleTextchange}
                        type="text"
                        placeholder="Write a review"
                        value={text}
                    />
                    <Button type="submit" isDisabled={disabled}>
                        submit
                    </Button>
                </div>
                {messege && <div className="messege">{messege}</div>}
            </form>
        </Card>
    );
}
export default FeedbackForm;
