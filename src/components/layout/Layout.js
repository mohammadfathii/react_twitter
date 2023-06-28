import React from "react";
import useStyles from "./Styles";
import RightSideBar from "../rightSidebar/RightSideBar";
import LeftSideBar from "../leftSidebar/LeftSideBar";
import {Divider} from "@material-ui/core";
import Tag from "../../pages/tag/Tag";

const Layout = () => {
    const classes = useStyles();
    return <div className={classes.root}>
        <RightSideBar/>
        <Divider orientation={"vertical"} className={classes.divider} />
        {/*<Home/>*/}
        <Tag tagName={"به_تو_ربطی_نداره"}/>
        <Divider orientation={"vertical"} className={classes.divider} />
        <LeftSideBar/>
    </div>;
}

export default Layout;

