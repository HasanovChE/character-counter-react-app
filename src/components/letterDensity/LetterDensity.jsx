import './LetterDensity.css'
import Letter from '../letter/Letter'
function LetterDensity({ letterData }){
    return (
        <div className="letter-density">
            <p className='letter-density-text'>Letter Density</p>
           <ul className="letters">
                {letterData.map(({ letter, count, percent }) => (
                    <Letter key={letter} letter={letter} count={count} percent={percent} />
                ))}
            </ul>
        </div>
    );
}

export default LetterDensity;