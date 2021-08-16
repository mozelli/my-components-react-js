import "./styles.css";

function RoundedInput() {
    return (
        <div id="rounded-input">
            <label htmlFor="input">Label</label>
            <div className="input-container">
                <input type="text" id="input" />
            </div>
        </div>
    );
}

export default RoundedInput;