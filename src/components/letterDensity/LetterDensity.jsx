import './LetterDensity.css'
import Letter from '../letter/Letter'

function LetterDensity({ letterData }) {
    if (letterData.length === 0) return null;

    return (
        <div className="letter-density-container">
            <h3 className="section-title">Letter Density</h3>
            <div className="density-list">
                {letterData
                    .sort((a, b) => b.count - a.count)
                    .slice(0, 20)
                    .map(({ letter, count, percent }) => (
                        <Letter key={letter} letter={letter} count={count} percent={percent} />
                    ))}
            </div>
            {letterData.length > 20 && (
                <p className="more-info">Showing top 20 most used letters</p>
            )}
        </div>
    );
}

export default LetterDensity;