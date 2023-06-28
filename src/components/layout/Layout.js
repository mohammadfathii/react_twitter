import React from "react";
import useStyles from "./Styles";
import RightSideBar from "../rightSidebar/RightSideBar";
import LeftSideBar from "../leftSidebar/LeftSideBar";
import {Divider} from "@material-ui/core";
import User from "../../pages/user/User";

const Layout = () => {
    const classes = useStyles();
    return <div className={classes.root}>
        <RightSideBar/>
        <Divider orientation={"vertical"} className={classes.divider} />
        {/*<Home/>*/}
        {/*<Tag tagName={"به_تو_ربطی_نداره"}/>*/}
        <User username={"mohammadfathi"}/>
        <Divider orientation={"vertical"} className={classes.divider} />
        <LeftSideBar/>
    </div>;
}

export default Layout;

