import { MdDelete, MdEdit } from "react-icons/md";
import Card from "./shared/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
    const { handleDelete } = useContext(FeedbackContext);
    const { handleEdit } = useContext(FeedbackContext);
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => handleDelete(item.id)} className="close">
                <MdDelete />
            </button>
            <button onClick={() => handleEdit(item)} className="edit">
                <MdEdit />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
}

Card.defaultProps = {
    reverse: false,
};

export default FeedbackItem;
