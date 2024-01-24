import { memo } from "react";
import { Component2 } from "./Component2";
import { Component3 } from "./Component3";

export const Component1 = memo((props) => {
    const style = {
        backgroundColor: "blue",
        height: "300px",
    };
    
    console.log("called Component1");

    const {onClickReset} = props;

    return (
        <div style={style}>
            <p>Component1</p>
            <button onClick={onClickReset}>リセット</button>
            <Component2/>
            <Component3/>
        </div>
    );
});