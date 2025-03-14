import './CardList.css'
import Card from '../card/Card';

function CardList({ charCount, wordCount, lineCount }){
    return(
        <ul className="cards">
            <Card number={charCount} whatCounted={"Total Characters"} bgColor={"#D3A0FA"}/>
            <Card number={wordCount} whatCounted={"Word Count"} bgColor={"#FFA001"}/>
            <Card number={lineCount} whatCounted={"Line Count"} bgColor={"#FE8159"}/>
        </ul>
    )
}
export default CardList;