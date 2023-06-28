import React from "react";
import useStyles from "./Styles";
import {Divider} from "@material-ui/core";
import Header from "./components/Header/Header";
import Tweet from "./components/Tweet/Tweet";

const dataList = [
    {fullname : "محمد فتحی",username : 'mohammadfathi',tweet : 'توییت تست '},
    {fullname : "محمد فتحی",username : 'mohammadfathi',tweet : 'توییت تست '},
    {fullname : "محمد فتحی",username : 'mohammadfathi',tweet : 'توییت تست '},
    {fullname : "محمد فتحی",username : 'mohammadfathi',tweet : 'توییت تست '},
    {fullname : "محمد فتحی",username : 'mohammadfathi',tweet : 'توییت تست '},
    {fullname : "محمد فتحی",username : 'mohammadfathi',tweet : 'توییت تست '},
    {fullname : "محمد فتحی",username : 'mohammadfathi',tweet : 'توییت تست '},
]

const Home = () => {
    const classes = useStyles()
    return <div className={classes.root}>
        <Header/>
        <Divider className={classes.divider}/>
        {dataList.map((data,index) => { return <><Tweet fullname={data.fullname} username={data.username} tweet={data.tweet}/> { (index < dataList.length - 1) ?
                    <Divider className={classes.divider}/> : ""}</> })}
    </div>
}

export default Home;
