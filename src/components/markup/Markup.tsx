import React, { ReactNode } from "react";
import classes from "./markup.module.css";

type PropsType = {
	left: ReactNode;
	right: ReactNode;
};

export const Markup: React.FC<PropsType> = (props) => {
	return (
		<div className={classes.root}>
			<div className={classes.left}>{props.left}</div>
			<div className={classes.right}>{props.right}</div>
		</div>
	);
};
