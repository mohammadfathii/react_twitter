import React, {useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import {ButtonBase} from "@material-ui/core";

const Test = () => {
    const [data,setData] = useState(null);

    const increaseData = () => {
        setData(data + 1);
        console.log(inputRef.current.value)
    }

    useEffect((e) => {
        console.log(`Data has changed to ${data} !`,e);
    },[data]);

    const buttonRef = useRef()
    const inputRef = useRef();
    console.log(buttonRef.current)
    return (
        <div>
            <input type="text" ref={inputRef} />
            <button ref={buttonRef} onClick={increaseData}>Increase One More Data</button>
            <br/><br/><br/>

            <Link style={{ color : 'red' }} to={"/home"}>Go To Home</Link>
            <br/>
            <ButtonBase>
                <Link to={"/home"}>Go To Home</Link>
            </ButtonBase>

            <br/>
            <ButtonBase>
                <Link to={"/post/1"}>post 1</Link>
            </ButtonBase>
            <br/>
            <ButtonBase>
                <Link to={"/post/2"}>post 2</Link>
            </ButtonBase>
            <br/>
            <ButtonBase>
                <Link to={"/post/3"}>post 3</Link>
            </ButtonBase>
        </div>
    );
};

export default Test;