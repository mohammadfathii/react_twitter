import React from 'react';
import {Grid} from "@material-ui/core";
import {SupervisedUserCircle} from "@material-ui/icons";
import {Button, IconButton} from "@mui/material";
import {UploadFile} from "@mui/icons-material";
import useStyles from "./Styles";

const NewTweet = () => {
    const classes = useStyles();
    return (
        <div className={classes.newTwittBox}>
            <Grid container direction={"row"}>
                <SupervisedUserCircle style={{ fontSize:'4rem' }}/>
                <textarea placeholder={"تایپ کن..."} className={classes.newTwittInput}/>
            </Grid>
            <Grid className={classes.newTwittBtnContainer} container direction={"row-reversed"}>
                <Button className={classes.newTwittBtn} variant={"contained"} color={"primary"}>ثبت توییت</Button>
                <IconButton>
                    <UploadFile style={{ fontSize:'3rem !important' }}></UploadFile>
                </IconButton>
            </Grid>
        </div>
    );
};

export default NewTweet;