import React from 'react';
import useStyles from "./Styles";
import {Divider, Grid, Typography} from "@material-ui/core";
import TagIcon from "@mui/icons-material/Tag";
import Tweet from "../home/components/Tweet/Tweet";
import {tweetsList} from "../../data/tweets";
import {useParams} from "react-router-dom";

const Tag = () => {
    const { tagName } = useParams();
    const classes = useStyles();
    return (
        <>
            <Grid className={classes.headerBox} container direction={"row"} alignItems={"center"}>
                <TagIcon/>
                <Typography className={classes.tagTitle} component={"h1"}>{tagName}</Typography>
            </Grid>
            <Divider className={classes.divider}/>

            {tweetsList.map((data,index) => { return <><Tweet fullname={data.fullname} username={data.username} tweet={data.tweet}/> { (index < tweetsList.length - 1) ?
                <Divider className={classes.divider}/> : ""}</> })}

        </>
    );
};

export default Tag;