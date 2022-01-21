import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


const useStyles = makeStyles(({

    fields: {
        marginTop: '16px!important'
    },
    radioField: {textAlign: 'left'}
}));

const theme = createTheme();

export default function RegisterBuyer() {
    const [data, setData] = useState({ userName: "", });
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid item xs={12}  component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginTop: '30px'
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <Grid container className={classes.fields} spacing={2}>

                                <Grid item xs={12} md={6}>
                                    <TextField

                                        placeholder="Enter scale of Business"
                                        name="scale"
                                        label="Scale of Plantation"
                                        value={data.firstName ? data.firstName : ''}
                                        variant="outlined"

                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        required
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        placeholder="Enter Name Of Business"
                                        name="businessName"
                                        label="Name Of Business"
                                        value={data.lastName ? data.lastName : ''}
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        required
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                            <Grid container className={classes.fields} spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        placeholder="Enter Mobile Number"
                                        name="mobile"
                                        label="Inheritor Mobile"
                                        value={data.lastName ? data.lastName : ''}
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        required
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        placeholder="Enter Alternative Mobile Number"
                                        name="altmobile"
                                        label="Inheritor Alternative Mobile"
                                        value={data.lastName ? data.lastName : ''}
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        required
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                            <Grid container className={classes.fields} spacing={3}>


                                <Grid item xs={12} md={4}>
                                    <TextField
                                        placeholder="Enter Inheritor Name"
                                        name="inheritorName"
                                        label="Inheritor Name"
                                        value={data.lastName ? data.lastName : ''}
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        required
                                        fullWidth
                                    />
                                </Grid>



                                <Grid item xs={12} md={4}>
                                    <TextField
                                        placeholder="Enter Inheritor Mobile"
                                        name="inheritorMobile"
                                        label="Inheritor Mobile"
                                        value={data.lastName ? data.lastName : ''}
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        required
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={12} md={4}>
                                    <TextField
                                        placeholder="Enter Alt Inheritor Mobile"
                                        name="inheritorAltMobile"
                                        label="Inheritor Alternate Mobile"
                                        value={data.lastName ? data.lastName : ''}
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        required
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                            <Grid container className={classes.fields} spacing={1}>

                                <Grid item xs={12} md={12}>
                                    <TextField
                                        placeholder="Enter aditional info"
                                        name="aditionalInfo"
                                        label="Aditional Infor"
                                        value={data.lastName ? data.lastName : ''}
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        required
                                        multiline
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                            <Grid container className={classes.fields} spacing={1}>

                                <Grid item xs={12} md={7} className={classes.radioField}>
                                    <FormControl style={{ marginTop: "7px" }} component="fieldset">
                                        <FormLabel scomponent="legend">Are you a registerd business</FormLabel>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <FormControl component="fieldset">
                                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                            <FormControlLabel value="YES" control={<Radio />} label="YES" />
                                            <FormControlLabel value="NO" control={<Radio />} label="NO" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid container className={classes.fields} spacing={1}>

                                <Grid item xs={12} md={7} className={classes.radioField}>
                                    <FormControl style={{ marginTop: "7px" }} component="fieldset">
                                        <FormLabel scomponent="legend">Can You Provide Tree Climbers For Buyers</FormLabel>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <FormControl component="fieldset">
                                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                            <FormControlLabel value="YES" control={<Radio />} label="YES" />
                                            <FormControlLabel value="NO" control={<Radio />} label="NO" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid container className={classes.fields} spacing={1}>

                                <Grid item xs={12} md={7} className={classes.radioField}>
                                    <FormControl style={{ marginTop: "7px" }} component="fieldset">
                                        <FormLabel scomponent="legend">Would you like to recieve calls from potential buyers</FormLabel>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <FormControl component="fieldset">
                                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                            <FormControlLabel value="YES" control={<Radio />} label="YES" />
                                            <FormControlLabel value="NO" control={<Radio />} label="NO" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                            </Grid>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Already have an account? Sign In"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}