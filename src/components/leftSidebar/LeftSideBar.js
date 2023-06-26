import React from "react";
import useStyles from "./Styles";
import { Grid, Typography } from "@material-ui/core";
import { Person } from "@material-ui/icons";

const LeftSideBar = () => {
    const classes = useStyles()
    return <div className={classes.root}>
        <Grid container direction="row" className={{ direction :"ltr" , marginLeft:"2rem" }} alignItems="center">
            <Grid item direction="column">
                <Typography className={classes.profFullName} component={"p"}>محمد فتحی</Typography>
                <Typography className={classes.profUserName} component={"p"}>mohammadfathi1400</Typography>
            </Grid>
            <Grid item className={classes.BaseAvatar}>
                <Person className={classes.Avatar}></Person>
            </Grid>
        </Grid>
    </div>
}

export default LeftSideBar;
