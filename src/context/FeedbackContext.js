import { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import feedbackData from "../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState(feedbackData);
    const [editText, setEditText] = useState({
        item: {},
        edit: false,
    });

    const handleDelete = (id) => {
        let resp = window.confirm("Do you want to delete the comment?");
        if (resp) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    const handleEdit = (item) => {
        setEditText({ item, edit: true });
    };

    const handleAddFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    const handleUpdate = (id, newFeedback) => {
        setFeedback(
            feedback.map((item) =>
                item.id === id ? { ...item, ...newFeedback } : item
            )
        );
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                editText,
                handleDelete,
                handleAddFeedback,
                handleUpdate,
                handleEdit,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
