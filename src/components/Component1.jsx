import { memo } from "react";
import { Component2 } from "./Component2";
import { Component3 } from "./Component3";

export const Component1 = memo(() => {
    const style = {
        backgroundColor: "blue",
        height: "20px",
    };
    
    console.log("called Component1");

    return (
        <div style={style}>
            <p>Component1</p>
            <Component2/>
            <Component3/>
        </div>
    );
});