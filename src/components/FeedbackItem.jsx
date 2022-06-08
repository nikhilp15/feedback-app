import { MdDelete } from "react-icons/md";
import Card from "./shared/Card";

function FeedbackItem({ item, handleDelete }) {
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => handleDelete(item.id)} className="close">
                <MdDelete />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
}

Card.defaultProps = {
    reverse: false,
};

export default FeedbackItem;
