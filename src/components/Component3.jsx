import { memo } from "react";

export const Component3 = memo(() => {
    const style = {
        backgroundColor: "black",
        height: "10px",
    };

    console.log("Called Component3");

    return (
        <div style={style}>
            <p>Component3</p>
        </div>
    );
});