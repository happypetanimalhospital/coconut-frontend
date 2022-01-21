import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@mui/material/TextField';
import { Grid } from "@material-ui/core";
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import SellersListCard from "../components/seller/SellerListCard";

const currencies = [
    {
        value: 'USD',
        label: 'Lorem Ipsum'
    },
    {
        value: 'EUR',
        label: 'Lorem Ipsum',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'cloumn'
    },
    toolBar: {
        borderBottom: '1px solid #dedede',
        color: '#575757',

        margin: '25px 5px 0px 5px',
        paddingBottom: '2px',
    },
    listContainer: {
        width: '80%',
        margin: '0 auto',
    }
}));


export default function SellersList() {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    const [value, setValue] = React.useState(2);
    const [data, setData] = useState([
        {userName: "Trewon", district: "Kiribathgoda, Gampaha", scale: 'High', average: 4},
        {userName: "Trewon", district: "Kiribathgoda, Gampaha", scale: 'High', average: 4},
        {userName: "Trewon", district: "Kiribathgoda, Gampaha", scale: 'High', average: 4},
        {userName: "Trewon", district: "Kiribathgoda, Gampaha", scale: 'High', average: 4},
        {userName: "Trewon", district: "Kiribathgoda, Gampaha", scale: 'High', average: 4},
        {userName: "Trewon", district: "Kiribathgoda, Gampaha", scale: 'High', average: 4},
    ])
    return (
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Grid container className={classes.toolBar} spacing={4}>
                <Grid item xs={12} md={3}>
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="District"
                            fullWidth
                            value={currency}
                            onChange={handleChange}
                            helperText="District "
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Scale"
                            fullWidth
                            value={currency}
                            onChange={handleChange}
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Sort by"
                            value={currency}
                            fullWidth
                            onChange={handleChange}
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Button fullWidth style={{ marginTop: '8px' }} variant="contained">Contained</Button>
                    </Grid>
                </Grid>
                <Grid className={classes.listContainer}>
                    {data.map((seller,index ) => 
                        <SellersListCard data={seller}/>
                    )}
                </Grid>

            </Grid>
    );
}

