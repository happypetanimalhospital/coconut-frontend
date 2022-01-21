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

export default function RegisterSeller() {
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
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={6}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
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
                            <Grid container className={classes.fields} spacing={3}>

                                <Grid item xs={12} md={4}>
                                    <TextField

                                        placeholder="Enter scale of plantation"
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
                                <Grid item xs={12} md={4}>
                                    <TextField
                                        placeholder="Enter Interval Between Harvest"
                                        name="intervalBetweenHarvest"
                                        label="Interval Between Harvest"
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
                                        placeholder="Enter Districe"
                                        name="district"
                                        label="Districe"
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

                                        placeholder="Enter Total Land"
                                        name="totalLand"
                                        label="Total Land"
                                        value={data.firstName ? data.firstName : ''}
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
                                        placeholder="Enter Yield Per Harvest"
                                        name="yieldPerHarvest"
                                        label="Yield Per Harvest"
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
                                        placeholder="Enter Total Number of Trees"
                                        name="totalTrees"
                                        label="Total Number of Trees"
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
                                        name="inheritormobile"
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
                                        placeholder="Enter Inheritor Alternative Mobile"
                                        name="inheritorAltmobile"
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
                            <Grid container className={classes.fields} spacing={2}>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        placeholder="Enter Areas You are comfortable to collect from"
                                        name="comfortableAreas"
                                        label="Areas You are comfortable to collect from"
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
                                        placeholder="Enter Nearest City"
                                        name="nearestCity"
                                        label="Nearest City"
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

                                <Grid item xs={12} md={7} className={classes.radio}>
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
                            <Grid container className={classes.fields} spacing={1}>

                                <Grid item xs={12} md={7}>
                                    <FormControl style={{ marginTop: "7px" }} component="fieldset">
                                        <FormLabel scomponent="legend">Would you like to recieve Emails from potential buyers</FormLabel>
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