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
    radioField: {textAlign: 'left'}
}));


export default function BuyerForm() {
	const [data, setData] = useState({ userName: "", });
    const classes = useStyles();


	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom>
				Advanced Details
      </Typography>
			<Grid container spacing={3}>
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
		</React.Fragment>
	);
}