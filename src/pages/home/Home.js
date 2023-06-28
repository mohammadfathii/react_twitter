import React from "react";
import useStyles from "./Styles";
import {Divider} from "@material-ui/core";
import Header from "./components/Header/Header";
import Tweet from "./components/Tweet/Tweet";
import {tweetsList} from '../../data/tweets'

const Home = () => {
    const classes = useStyles()
    return <div className={classes.root}>
        <Header/>
        <Divider className={classes.divider}/>
        {tweetsList.map((data,index) => { return <><Tweet fullname={data.fullname} username={data.username} tweet={data.tweet}/> { (index < tweetsList.length - 1) ?
                    <Divider className={classes.divider}/> : ""}</> })}
    </div>
}

export default Home;
