import React from 'react';
import useStyles from "./Styles";
import {Grid, Typography} from "@material-ui/core";
import {SupervisedUserCircle} from "@material-ui/icons";
import {IconButton} from "@mui/material";
import {HeartBroken} from "@mui/icons-material";

const Tweet = ({username,tweet}) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
                <Grid container direction={"row"} alignItems={"center"}>
                    <SupervisedUserCircle style={{ fontSize:'4rem' }}/>
                    <Grid container item>
                        <Typography className={classes.fullName}>محمد فتحی</Typography>
                        <Typography className={classes.username}>@mohammad.fathi</Typography>
                    </Grid>
                </Grid>
                <Grid className={classes.TweetBtnContainer} container direction={"row-reversed"}>
                    <IconButton>
                        <HeartBroken style={{ fontSize:'3rem !important' }}></HeartBroken>
                    </IconButton>
                    <IconButton>
                        <HeartBroken style={{ fontSize:'3rem !important' }}></HeartBroken>
                    </IconButton>
                    <IconButton>
                        <Typography>1000</Typography>
                    </IconButton>
                </Grid>
        </div>
    );
};

export default Tweet;
