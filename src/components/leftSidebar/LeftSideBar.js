import React from "react";
import useStyles from "./Styles";
import {Divider, Grid, Typography} from "@material-ui/core";
import {SupervisedUserCircle} from "@material-ui/icons";
import Twitter from "./twitter/twitter";
import {topUsers} from '../../data/topusers'


const LeftSideBar = () => {
    const classes = useStyles()
    return <div className={classes.root}>
        <Grid container direction="row-reverse" className={classes.baseProfile} alignItems="center">
            <Grid item direction="column" className={classes.profile}>
                <Typography className={classes.profFullName} component={"p"}>محمد فتحی</Typography>
                <Typography className={classes.profUserName} component={"p"}>@mohammadfathi1400</Typography>
            </Grid>
            <Grid item className={classes.BaseAvatar}>
                <SupervisedUserCircle className={classes.Avatar}></SupervisedUserCircle>
            </Grid>
        </Grid>

        <Grid container direction={"column"} className={classes.topTwitterList}>
            <Typography className={classes.topTwitterTitle}>لیست برترین خبر نگاران</Typography>
            <Divider className={classes.divider} />
            {topUsers.map((data,index) => {
                return <React.Fragment>
                    <Twitter name={data.name} username={data.username}/>
                    {index < topUsers.length-1  ?
                        <Divider className={classes.divider} />
                    : ''}
                </React.Fragment>
            })}
        </Grid>

    </div>

}


export default LeftSideBar;
