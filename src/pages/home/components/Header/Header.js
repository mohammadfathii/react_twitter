import React from 'react';
import {Divider, Typography} from "@material-ui/core";
import {Home} from "@material-ui/icons";
import useStyles from "./Styles";
import NewTweet from "../NewTweet/NewTweet";

const Header = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.header}>
                <Home />
                <Typography className={classes.headerTitle}>خانه</Typography>
            </div>
            <Divider className={classes.divider} orientation={'horizontal'} />
            <NewTweet />
        </>
    );
};

export default Header;