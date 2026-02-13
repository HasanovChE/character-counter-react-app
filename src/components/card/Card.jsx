import './Card.css'

function Card({ number, whatCounted, bgColor }) {
    return (
        <div className="stat-card" style={{ '--accent-color': bgColor }}>
            <div className="stat-number">{number}</div>
            <div className="stat-label">{whatCounted}</div>
        </div>
    )
}

export default Card