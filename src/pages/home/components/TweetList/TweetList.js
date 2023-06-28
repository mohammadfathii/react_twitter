import React from 'react';
import Tweet from "../Tweet/Tweet";
import {Divider} from "@material-ui/core";
import useStyles from "./Styles";

const dataList = [
    {username : '',tweet : ''},
    {username : '',tweet : ''},
    {username : '',tweet : ''},
    {username : '',tweet : ''},
    {username : '',tweet : ''},
    {username : '',tweet : ''},
]

const TweetList = () => {
    const classes = useStyles()
    return (
        <>{dataList.map((data,index) => {
                return <React.Fragment>
                    <Tweet username={data.username} tweet={data.tweet}/> { (index < dataList.length - 1) ? <Divider className={classes.divider}/> : ""}
                </React.Fragment>
        })} </>
    );
};

export default TweetList;