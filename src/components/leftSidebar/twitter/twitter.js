import React from 'react';
import useStyles from "./Styles";
import {ButtonBase, Grid, Typography} from "@material-ui/core";
import {SupervisedUserCircle} from "@material-ui/icons";

const Twitter = ({name,username}) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <ButtonBase style={{ width:'max-content' }}>
                <Grid container direction="row-reverse" className={classes.baseProfile} alignItems="center">
                    <Grid item direction="column" className={classes.profile}>
                        <Typography className={classes.profFullName} component={"p"}>{name}</Typography>
                        <Typography className={classes.profUserName} component={"p"}>{username}@</Typography>
                    </Grid>
                    <Grid item className={classes.BaseAvatar}>
                        <SupervisedUserCircle className={classes.Avatar}></SupervisedUserCircle>
                    </Grid>
                </Grid>
            </ButtonBase>
        </React.Fragment>
    );
};

export default Twitter;