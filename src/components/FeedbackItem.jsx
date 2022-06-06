import Card from './shared/Card'

function FeedbackItem({item}) {
    
    return (
        <Card>
            <div className="num-display">{ item.rating }</div>
            <div className="text-display">{ item.text }</div>
        </Card>
    )
}

Card.defaultProps = {
    reverse: false,
}

export default FeedbackItem