import React from 'react';
import {useParams} from "react-router-dom";
import {Typography} from "@material-ui/core";

const Post = (props) => {
    const params = useParams()
    const {id} = useParams() // or using like that
    return (
        <div style={{ backgroundColor : 'white' , padding : '30px' }}>
            <Typography component={"h1"}>پست شماره {params.id}</Typography>
        </div>
    );
};

export default Post;

