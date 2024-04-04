export default function Die({numSides = 6}){
    const roll1 = Math.floor(Math.random() * numSides) + 1;
    const roll2 = Math.floor(Math.random() * numSides) + 1;

    const resultColor = roll1===roll2 ? 'magenta' : 'red';

    return (
        <p style={{color:resultColor}}>
            {numSides}-sided die roll:{roll1} and {roll2}  
        </p>
    );
}