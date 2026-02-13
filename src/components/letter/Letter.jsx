import './letter.css'

function Letter({ letter, count, percent }) {
    return (
        <div className="letter-row">
            <span className="char">{letter.toUpperCase()}</span>
            <div className="progress-bar-container">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${percent}%` }}
                ></div>
            </div>
            <div className="stats">
                <span className="count">{count}</span>
                <span className="percent">{percent}%</span>
            </div>
        </div>
    )
}

export default Letter