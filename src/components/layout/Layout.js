import React from "react";
import useStyles from "./Styles";
import RightSideBar from "../rightSidebar/RightSideBar";
import LeftSideBar from "../leftSidebar/LeftSideBar";
import {Divider} from "@material-ui/core";

const Layout = (props) => {
    const classes = useStyles();
    return <div className={classes.root}>
        <RightSideBar/>
        <Divider orientation={"vertical"} className={classes.divider} />
        {/*<Home/>*/}
        {/*<Tag tagName={"به_تو_ربطی_نداره"}/>*/}
        <div className={classes.main}>
            {props.children}
        </div>
        <Divider orientation={"vertical"} className={classes.divider} />
        <LeftSideBar/>
    </div>;
}

export default Layout;

