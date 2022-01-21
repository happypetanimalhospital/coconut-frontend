import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const useStyles = makeStyles(({

    fields: {
        marginTop: '16px!important'
    },
    radioField: { textAlign: 'left' }
}));


export default function SellerForm() {
    const [data, setData] = useState({ userName: "", });
    const classes = useStyles();


    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Advanced Details
      </Typography>
            <Grid container spacing={3}>
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
        </React.Fragment>
    );
}