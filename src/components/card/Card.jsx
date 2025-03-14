import './Card.css'
function Card ({number, whatCounted, bgColor}){
    return (
        <div className="card" style={{backgroundColor:bgColor}}>
            <li>
            <p className="number text-black dark:text-white">{number}</p>
            <p className="what-counted text-black dark:text-white">{whatCounted}</p>
            </li>
        </div>
    )
}

export default Card