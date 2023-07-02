import React from 'react';
import {ButtonBase, makeStyles, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root :{
        padding : '30px',
        backgroundColor : 'white',
        height : '100vh',
        overflow : 'hidden !important',
    }
    ,
    BackTooHome: {
        padding : '20px',
        backgroundColor : theme.palette.primary.main,
        color : 'white',
        textDecoration : 'none',
        borderRadius : '20px'
    }
}));

const Page404 = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <center>
                <Typography>
                    <h1>ارور 404 - صفحه مورد نظر یافت نشد </h1>
                </Typography>
                <Typography component={"p"}>صفحه مورد نظر یا پاک شده و یا اشتباه آدرس وارد شده است لطفا با ادمین ها در ارتباط باشید !</Typography>
                <Typography component={"p"}>{window.location.href}</Typography><br/>
                <ButtonBase>
                    <Link className={classes.BackTooHome} to={"/"}>بازگشت به خانه</Link>
                </ButtonBase>
            </center>
        </div>
    );
};

export default Page404;
