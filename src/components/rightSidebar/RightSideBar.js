import React from "react";
import useStyles from "./Styles";
import { Grid, Typography } from "@material-ui/core";
import TwitterIcon from '@mui/icons-material/Twitter';
import HashTag from "./HashTag/HashTag";

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

          <HashTag title={"به_تو_ربطی_نداره"} link={"#"} />     
          <HashTag title={"به_تو_ربطی_نداره"} link={"#"} />
          <HashTag title={"به_تو_ربطی_نداره"} link={"#"} />

        </Grid>
      </div>
  );
};

export default RightSideBar;
