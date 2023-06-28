import React from 'react';
import useStyles from "./Styles";
import {Divider, Grid, Typography} from "@material-ui/core";
import Tweet from "../home/components/Tweet/Tweet";
import {tweetsList} from "../../data/tweets";
import {SupervisedUserCircle} from "@material-ui/icons";

const User = ({username}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid className={classes.headerBox} container direction={"row"} alignItems={"center"}>
                <SupervisedUserCircle className={classes.usericon}/>
                <Typography className={classes.tagTitle} component={"h1"}>{username}</Typography>
            </Grid>
            <Divider className={classes.divider}/>

            {tweetsList.map((data,index) => { return <><Tweet fullname={data.fullname} username={data.username} tweet={data.tweet}/> { (index < tweetsList.length - 1) ?
                <Divider className={classes.divider}/> : ""}</> })}

        </div>
    );
};

export default User;