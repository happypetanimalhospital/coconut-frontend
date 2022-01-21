import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'cloumn'
    },
    container: {
        height: '150px',
        justifyContent: 'start',
        borderTop: '1px solid #dedede',
        margin:'0px'
    },
    imgCover: {
        border: '1px solid #dedede',
        height: '100%',


    },
    wording: {
        textAlign: 'left'
    }
}));


export default function SellersListCard(props) {
    const classes = useStyles();

    const [value, setValue] = React.useState(2);
    const [data, setData] = useState({
        userName: "Trewon", askingPrice: 200, offerPrice: 300, ratings: 88,
        price: 4, selection: 5, punctuality: 4, professonalism: 3, average: 4
    })

    return (
        <Grid container className={classes.container} spacing={2}>
            <Grid item xs={12} md={2}>
                <div className={classes.imgCover} ></div>
            </Grid>
            <Grid className={classes.wording} item xs={12} md={6}>
                <Typography component="div" variant="h5">
                    {props.data.userName}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    {props.data.district}
                 </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    {props.data.scale}
                </Typography>
                <Rating
                    name="simple-controlled"
                    value={4}
                    onChange={(event, newValue) => {
                        // setValue(newValue);
                    }}
                />
            </Grid>
        </Grid>

    );
}

