import { useState, createContext, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
// import feedbackData from "../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([]);
    const [editText, setEditText] = useState({
        item: {},
        edit: false,
    });

    useEffect(() => {
        fetchFeedback();
    }, []);

    const fetchFeedback = async () => {
        const resp = await fetch("/feedback?_sort=id&_order=desc");
        const data = await resp.json();
        setFeedback(data);
    };
    const handleDelete = async (id) => {
        const response = fetch(`feedback/${id}`, {
            method: `DELETE`,
        });
        let resp = window.confirm("Do you want to delete the comment?");
        if (resp) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    const handleEdit = (item) => {
        setEditText({ item, edit: true });
    };

    const handleAddFeedback = async (newFeedback) => {
        // newFeedback.id = uuidv4();
        const resp = await fetch("/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFeedback),
        });
        setFeedback([await resp.json(), ...feedback]);
    };

    const handleUpdate = async (id, newFeedback) => {
        const resp = await fetch(`/feedback/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFeedback),
        });

        let data = await resp.json();

        setFeedback(
            feedback.map((item) =>
                item.id === id ? { ...item, ...data } : item
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
