import { useState, useEffect } from "react";

import "./styles.css";

function RoundedInput({ type, label, icon="", size="" }) {

    const [ inputFocus, setInputFocus ] = useState(false);
    const [ inputContainerStyle, setInputContainerStyle ] = useState(`input-container ${ size }`);
    const [ labelStyle, setLabelStyle ] = useState("");


    function changeInputState() {
        setInputFocus(!inputFocus);
    }

    useEffect(() => {
        if(inputFocus) {
            setLabelStyle("focus");
            setInputContainerStyle(`input-container focus ${ size }`);
        } else {
            setLabelStyle("");
            setInputContainerStyle(`input-container ${size}`);
        }
    }, [inputFocus, size]);

    return (
        <div id="rounded-input">
            <label className={ labelStyle } >{ label }</label>
            <div className={ inputContainerStyle }>
                <input 
                    type={ type }
                    className={ size }
                    onFocus={ changeInputState }
                    onBlur={ changeInputState } 
                />
                { icon === "" || 
                    <img src={ icon } alt={ label } className={ size } />
                }
            </div>
        </div>
    );
}

export default RoundedInput;