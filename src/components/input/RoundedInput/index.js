import { useState } from "react";

import "./styles.css";
import EmailIcon from "../assets/email-icon.svg";

function RoundedInput() {

    const [ inputFocus, setInputFocus ] = useState(false);

    function changeInputState() {
        setInputFocus(!inputFocus);
    }

    return (
        <div id="rounded-input">
            <label>Email</label>
            <div className="input-container">
                <input 
                    type="text"
                    onFocus={ changeInputState }
                    onBlur={ changeInputState } 
                />
                <img src={ EmailIcon } alt="Email" />
            </div>
        </div>
    );
}

export default RoundedInput;