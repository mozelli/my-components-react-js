import "./styles.css";
import EmailIcon from "../assets/email-icon.svg";

function RoundedInput() {
    return (
        <div id="rounded-input">
            <label>Email</label>
            <div className="input-container">
                <input type="text" />
                <img src={ EmailIcon } alt="Email" />
            </div>
        </div>
    );
}

export default RoundedInput;