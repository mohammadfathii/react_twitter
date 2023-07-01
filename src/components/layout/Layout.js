import React from "react";
import useStyles from "./Styles";
import RightSideBar from "../rightSidebar/RightSideBar";
import LeftSideBar from "../leftSidebar/LeftSideBar";
import {Divider} from "@material-ui/core";
import User from "../../pages/user/User";
import Home from "../../pages/home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const Layout = () => {
    const classes = useStyles();
    return <div className={classes.root}>
        <RightSideBar/>
        <Divider orientation={"vertical"} className={classes.divider} />
        {/*<Home/>*/}
        {/*<Tag tagName={"به_تو_ربطی_نداره"}/>*/}
        <BrowserRouter>
            <Routes>
                <Route index path={"/"} element={<Home />} />
                <Route path={"/User/:username"} element={<User />} />
            </Routes>
        </BrowserRouter>
        <Divider orientation={"vertical"} className={classes.divider} />
        <LeftSideBar/>
    </div>;
}

export default Layout;

