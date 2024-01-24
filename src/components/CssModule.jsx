import classes from "../Cssmodule.module.scss"

export const CssModules = () => {
    return (
        <div className={classes.container}>
            <button className={classes.button}>ボタン</button>
            <p className={classes.title}>Cssモジュールです</p>
        </div>
    );
}