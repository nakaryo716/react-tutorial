import { memo } from "react";

export const Component2 = memo(() => {
    const style = {
        backgroundColor: "red",
        height: "100px",
        margin: "20px"
    };

    console.log("Called Component2");

    return (
        <div style={style}>
            <p>Component2</p>
        </div>
    );
});