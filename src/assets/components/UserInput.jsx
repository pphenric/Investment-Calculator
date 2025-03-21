export default function UserInput({inputData, inputIndex, labelName}) {
    return (
        <p>
            <label>{labelName}</label>
            <input 
                type="number"
                min={0} 
                required 
                value={inputData[inputIndex].value}
                onChange={(event) => inputData[inputIndex].setValue(event.target.value)}
            ></input>
        </p>
    );
}