import React from 'react';
import useStyles from "./Styles";
import {Grid, Typography} from "@material-ui/core";
import {Favorite, SupervisedUserCircle} from "@material-ui/icons";
import {IconButton} from "@mui/material";
import {BookmarkAdd} from "@mui/icons-material";

const Tweet = ({fullname,username,tweet}) => {
        const classes = useStyles()
        return (
            <div className={classes.root}>
                <Grid container direction={"row"} alignItems={"center"}>
                    <SupervisedUserCircle style={{ fontSize:'4rem' }}/>
                    <Typography className={classes.fullName}>{fullname}</Typography>
                    <Typography className={classes.username}>{username}@</Typography>
                    <Grid className={classes.tweetTextBox} container item>
                        <Typography component={"p"}>
                            {tweet}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid className={classes.TweetBtnContainer} container direction={"row-reversed"}>
                    <IconButton className={classes.TweetIcon}>
                        <Favorite style={{ fontSize:'3rem !important',color : 'red' }}></Favorite>
                    </IconButton>
                    <IconButton className={classes.TweetIcon}>
                        <BookmarkAdd style={{ fontSize:'3rem !important' }}></BookmarkAdd>
                    </IconButton>
                    <IconButton>
                        <Typography>1000</Typography>
                    </IconButton>
                </Grid>
            </div>
        );
    };

export default Tweet;
