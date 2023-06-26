import React from "react";
import TagIcon from '@mui/icons-material/Tag';
import { ButtonBase, Grid, Typography } from "@material-ui/core";
import useStyles from './Styles'

const HashTag = ({title,link}) => {
    const classes = useStyles();
    return <div>
        {/* HashTag */}
        <ButtonBase className="HashTagClick">
            <Grid item container className={classes.HashTagBox} alignItems="center">
                <Grid item>
                <TagIcon className={classes.TagIcon}></TagIcon>
                </Grid>
                <Grid item>
                <Typography href={link} className={classes.TagSubject} component={"a"}>{title}</Typography>
                </Grid>
            </Grid>
          </ButtonBase>
        {/* End-HashTag */}
    </div>
}

export default HashTag;
