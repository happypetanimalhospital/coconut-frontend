import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from '@mui/material/Rating';
import { Button } from "@material-ui/core";




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
        justifyContent: 'space-around'
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


export default function SellerProfilePage() {
    const classes = useStyles();
    const [value, setValue] = React.useState(2);
    const [data, setData] = useState({
        userName: "Trewon", askingPrice: 200, offerPrice: 300, ratings: 88,
        price: 4, selection: 5, punctuality: 4, professonalism: 3, average: 4
    })
    return (
        <div className={classes.root}>
            <table className={classes.table}>
                <h1 className={classes.tableHead}>Account overview</h1>
                <tbody className={classes.tbody}>
                    <tr className={classes.tr}>
                        <td className={classes.td}>Name </td>
                        <td className={classes.tdr}>{data.userName}</td>
                    </tr>
                    <tr className={classes.tr}>
                        <td className={classes.td}>Asking Price </td>
                        <td className={classes.tdr}>{data.askingPrice}</td>
                    </tr>
                    <tr className={classes.tr}>
                        <td className={classes.td}>Offer Price </td>
                        <td className={classes.tdr}>{data.offerPrice}</td>
                    </tr>
                    <tr className={classes.tr}>
                        <td className={classes.td}>Price </td>
                        <td className={classes.tdr}><Rating
                            name="simple-controlled"
                            value={data.professonalism}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        /></td>
                    </tr>
                    <tr className={classes.tr}>
                        <td className={classes.td}>Selection </td>
                        <td className={classes.tdr}><Rating
                            name="simple-controlled"
                            value={data.professonalism}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        /></td>
                    </tr>
                    <tr className={classes.tr}>
                        <td className={classes.td}>Punctuality </td>
                        <td className={classes.tdr}><Rating
                            name="simple-controlled"
                            value={data.professonalism}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        /></td>
                    </tr>
                    <tr className={classes.tr}>
                        <td className={classes.td}>professonalism </td>
                        <td className={classes.tdr}> <Rating
                            name="simple-controlled"
                            value={data.professonalism}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        /></td>
                    </tr>
                    <tr className={classes.tr}>
                        <td className={classes.td}>Average </td>
                        <td className={classes.tdr}><Rating
                            name="simple-controlled"
                            value={data.professonalism}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        /></td>
                    </tr>
                </tbody>
            </table>
            <div className={classes.btnCover}>
                <Button className={classes.btn} color="primary" variant="contained">Offer</Button>
                <Button className={classes.btn} color="primary" variant="contained">Confirm</Button>
            </div>
        </div>
    );
}

