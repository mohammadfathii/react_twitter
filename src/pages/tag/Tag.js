import React from 'react';
import useStyles from "./Styles";
import {Divider, Grid, Typography} from "@material-ui/core";
import TagIcon from "@mui/icons-material/Tag";
import Tweet from "../home/components/Tweet/Tweet";
import {tweetsList} from "../../data/tweets";

const Tag = ({tagName}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid className={classes.headerBox} container direction={"row"} alignItems={"center"}>
                <TagIcon/>
                <Typography className={classes.tagTitle} component={"h1"}>{tagName}</Typography>
            </Grid>
            <Divider className={classes.divider}/>

            {tweetsList.map((data,index) => { return <><Tweet fullname={data.fullname} username={data.username} tweet={data.tweet}/> { (index < tweetsList.length - 1) ?
                <Divider className={classes.divider}/> : ""}</> })}

        </div>
    );
};

export default Tag;