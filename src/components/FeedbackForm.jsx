import Card from "./shared/Card";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
    const { handleAddFeedback, handleUpdate, editText } =
        useContext(FeedbackContext);
    const [text, setText] = useState("");
    const [rating, setRating] = useState(10);
    const [messege, setMessege] = useState(null);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (editText.edit === true) {
            setText(editText.item.text);
            setRating(editText.item.rating);
        }
    }, [editText]);

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

            if (editText.edit === true) {
                handleUpdate(editText.item.id, newFeedback);
                editText.edit = false;
            } else {
                handleAddFeedback(newFeedback);
            }

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
