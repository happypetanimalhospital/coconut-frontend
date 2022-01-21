import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from '@mui/material/Rating';
import { Button, TextField } from "@material-ui/core";




const useStyles = makeStyles((theme) => ({
    root: {
        width: '60%',
        margin: '0 auto'
    },
    bar: {
        backgroundColor: "#2160A0",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    HeaderButton: {
        margin: "0 2% 0 2%",
    },
    formStyles: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '3%'
    },
    imgStyles: {
        width: '25%',
        marginLeft: '2.5%',
        borderRadius: '100px',
    },
    formInputs: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        marginBottom: '2%',
    },
    input: {
        margin: '5%',
        marginRight: '50%',
        padding: '3%',
        borderRadius: '10px',
        fontSize: '1.25rem',
    },
    input2: {
        margin: '5%',
        padding: '5%',
        borderRadius: '10px',
        fontSize: '1.25rem',
        marginLeft: '5%'
    },
    formRadios: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginLeft: '80%'
    },
    textStylingRadios: {
        padding: '0',
        margin: '3%',
        marginLeft: '100%',
        width: '100%',
        color: 'rgb(0, 0, 0, 60%)',
        textAlign: 'center',
    },
    textStylingInputs: {
        padding: '0',
        margin: '1%',
        marginLeft: '15%',
        color: 'rgb(0, 0, 0, 60%)',
        textAlign: 'center',
    },
    tr: {
        borderBottom: '1px solid #dedede',
        color: '#575757',
        borderCollapse: 'collapse',
        maxWidth: '100%',
        textAlign: 'left',
        width: '100%',
        marginTop: '25px'
    },
    td: {
        color: '#b3b3b3',
        padding: '1em 1em 1em 0px',
        whiteSpace: 'nowrap'
    },
    tdr: {
        color: '#000',
        padding: '1em 0px',
        textAlign: 'left',
        wordBreak: 'break-all'
    },
    tbody: {
        borderCollapse: 'collapse',
        maxWidth: '100%',
        textAlign: 'left',
        width: '100%'
    },
    table: {
        borderCollapse: 'collapse',
        maxWidth: '100%',
        textAlign: 'left',
        width: '100%'
    },
    tableHead: {
        fontSize: '48px',
    },
    btnCover: {
        display: 'flex',
        justifyContent: 'start'
    },
    btn: {
        marginTop: '30px',
        height: '50px',
        width: '120px'
    },
    tableHead: {
        color: '#3f51b5'
    }
}));


export default function BuyerProfilePage() {
    const classes = useStyles();
    const [value, setValue] = React.useState(2);
    const [data, setData] = useState({
        userName: "Trewon", askingPrice: 200, offerPrice: 'Lorem ipsum', ratings: 88,
        price: 4, selection: 5, punctuality: 4, professonalism: 3, average: 4
    })
    console.log(data)
    return (
        <div className={classes.root}>
            {/* <section className='Sellerprofile-page'>
                <form className={classes.formStyles}>
                    <div id='aviurl' className={classes.formInputs}>
                        <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt='' className={classes.imgStyles} />
                    </div>

                </form>
            </section> */}
            <table className={classes.table}>
                <h1 className={classes.tableHead}>Account overview</h1>
                <tbody className={classes.tbody}>
                    <tr className={classes.tr}>
                        <td className={classes.td}>Scale </td>
                        <td className={classes.tdr}>{data.userName}</td>
                    </tr>
                    <tr className={classes.tr}>
                        <td className={classes.td}>Average yeald per harvest </td>
                        <td className={classes.tdr}>{data.askingPrice}</td>
                    </tr>
                    <tr className={classes.tr}>
                        <td className={classes.td}>district</td>
                        <td className={classes.tdr}>{data.offerPrice}</td>
                    </tr>
                    <tr className={classes.tr}>
                        <td className={classes.td}>city</td>
                        <td className={classes.tdr}>{data.offerPrice}</td>
                    </tr>
                    <tr className={classes.tr}>
                        <td className={classes.td}>Interval during harvest</td>
                        <td className={classes.tdr}>{data.offerPrice}</td>
                    </tr>
                    <tr className={classes.tr}>
                        <td className={classes.td}>Last harvest</td>
                        <td className={classes.tdr}>{data.offerPrice}</td>
                    </tr>
                    <tr className={classes.tr}>
                        <td className={classes.td}>Seller rating</td>
                        <td className={classes.tdr}>{data.offerPrice}</td>
                    </tr>
                    <tr className={classes.tr}>
                        <td className={classes.td}>Availability status</td>
                        <td className={classes.tdr}>{data.offerPrice}</td>
                    </tr>
                    <tr className={classes.tr}>
                        <td className={classes.td}>Current highest bid</td>
                        <td className={classes.tdr}>{data.offerPrice}</td>
                    </tr>
                    <tr className={classes.tr}>
                        <td className={classes.td}>Contact Number</td>
                        <td className={classes.tdr}>{data.offerPrice}</td>
                    </tr>
                    <tr className={classes.tr}>
                        <td className={classes.td}>Place your bid</td>
                        <td className={classes.tdr}><TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        </td>
                    </tr>
                </tbody>
                <div className={classes.btnCover}>
                    <Button className={classes.btn} color="primary" variant="contained">Confirm Bid</Button>
                </div>
            </table>
        </div>
    );
}

