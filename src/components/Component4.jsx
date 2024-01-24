import { memo } from "react";

export const Component4 = memo(() => {
    const style = {
        backgroundColor: "green",
        height: "10px",
    };

    console.log("Called Component4");

    return (
        <div style={style}>
            <p>Component4</p>
        </div>
    );
});