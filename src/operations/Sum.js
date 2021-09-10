import React, {useState} from "react";

export default function Sum(){

    const [data, setData] = useState({
        number1 : "",
        number2 : ""
    })
    
    const [result, setResult] = useState("")
    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }
    
    const handleonClick = () => {
        fetch('http://localhost:9096/add?num1='+ data.number1+ "&num2=" +data.number2)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setResult(data)
        });
    }
    return (
        <div>
            <div>
                <div>
                    <label>Number 1:</label>
                    <input type="number" onChange={handleChange} name="number1"></input>
                </div>
                <label>+</label>
                <div>
                    <label>Number 2:</label>
                    <input type="number" onChange={handleChange} name="number2"></input>
                </div>
            </div>
            <div>
                <p></p>
                <button onClick={handleonClick}>Result</button>
                <h3>Result: {result}</h3>
            </div>
            
        </div>
    );
}