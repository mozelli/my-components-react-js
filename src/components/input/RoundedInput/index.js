import { useState, useEffect } from "react";

import "./styles.css";
import EmailIcon from "../assets/email-icon.svg";

function RoundedInput() {

    const [ inputFocus, setInputFocus ] = useState(false);
    const [ inputContainerStyle, setInputContainerStyle ] = useState(`input-container`);
    const [ labelStyle, setLabelStyle ] = useState("");


    function changeInputState() {
        setInputFocus(!inputFocus);
    }

    useEffect(() => {
        if(inputFocus) {
            setLabelStyle("focus");
            setInputContainerStyle("input-container focus");
        } else {
            setLabelStyle("");
            setInputContainerStyle("input-container");
        }
    }, [inputFocus]);

    return (
        <div id="rounded-input">
            <label className={ labelStyle } >Email</label>
            <div className={ inputContainerStyle }>
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