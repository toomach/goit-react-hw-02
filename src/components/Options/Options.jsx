function Options ({ updateFeedback, reset, total }) {
    return (
        <div>
            <button onClick={()=> updateFeedback('good')}>Good</button>
            <button onClick={()=> updateFeedback('neutral')}>Neutral</button>
            <button onClick={()=> updateFeedback('bad')}>Bad</button>
            { total > 0 && <button onClick={reset}>Reset</button> }
        </div>
    )
}

export default Options