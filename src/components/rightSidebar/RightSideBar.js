import React from "react";
import useStyles from "./Styles";
import {Grid, Typography} from "@material-ui/core";
import TwitterIcon from '@mui/icons-material/Twitter';
import HashTag from "./HashTag/HashTag";
import {tophashtags} from "../../data/tophashtags";

const RightSideBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="row" alignItems="center">
        <Grid item>
            <TwitterIcon className={classes.twitter}></TwitterIcon>
        </Grid>
        <Grid item>
            <Typography className={classes.TypegraphyH1} component="h1">توییتر فارسی</Typography>
        </Grid>
      </Grid>

      <Typography component={"h2"} className={classes.hashTagsTitle}>
          داغ ترین هشتگ ها
      </Typography>
        <Grid className={classes.hothastags} container direction="column">
            { tophashtags.map(data => <HashTag title={data} link={"#"} /> ) }
        </Grid>
      </div>
  );
};

export default RightSideBar;
