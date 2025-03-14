import './letter.css'

function Letter({letter, count,percent}){
    const barColor = `rgba(255, 0, 150)`; // Adjust color based on percentage
    return(
        <div className="a-letter-density">
            <li className="letter  text-black dark:text-white">
            <p className="letter-itself text-black dark:text-white">{letter}</p>
            <div className="bar-container">
                <div className="bar bg-pink-400" style={{ width: `${percent}%`, backgroundColor: barColor }}></div>
                <div className="second-degree-bar bg-gray-50"></div>
                </div>
            <p className="letter-count text-black dark:text-white">{count}</p>
            <p className="letter-percentage text-black dark:text-white">({percent}%)</p>
            </li>
        </div>
    )
}
export default Letter