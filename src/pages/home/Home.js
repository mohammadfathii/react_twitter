import React from "react";
import useStyles from "./Styles";
import {Divider} from "@material-ui/core";
import Header from "./components/Header/Header";
import TweetList from "./components/TweetList/TweetList";


const Home = () => {
    const classes = useStyles()
    return <div className={classes.root}>
        <Header/>
        <Divider className={classes.divider}/>
        <TweetList/>
    </div>
}

export default Home;
