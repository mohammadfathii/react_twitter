import React from "react";
import useStyles from "./Styles";
import RightSideBar from "../rightSidebar/RightSideBar";
import Main from "../mainPart/Main";
import LeftSideBar from "../leftSidebar/LeftSideBar";
import { Divider } from "@material-ui/core";

const Layout = () => {
    const classes = useStyles();
    return <div className={classes.root}>
        <RightSideBar/>
        <Divider orientation={"vertical"} className={classes.divider} />
        <Main/>
        <Divider orientation={"vertical"} className={classes.divider} />
        <LeftSideBar/>
    </div>;
}

export default Layout;

