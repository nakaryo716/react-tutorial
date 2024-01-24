import { memo, useCallback, useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./components/CssModule";
import { Component1 } from "./components/Component1";
import { Component4 } from "./components/Component4";

export const App = memo(() => {
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum((prev) => prev + 1);
  };

  const onClickReset = useCallback(() => {
    setNum(0);
  }, []);

  return (
    <>
      <h1 style={{color: "red"}}>こんにちは！</h1>
      <ColoredMessage color="blue">お元気ですか</ColoredMessage>
      <ColoredMessage color="pink">元気です！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <CssModules/>

      <Component1 onClickReset={onClickReset}/>
      <Component4/>
    </>
  );
});