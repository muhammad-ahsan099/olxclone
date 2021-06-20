
import './Post.css';

import {Link } from 'react-router-dom';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PhotoCamera from '@material-ui/icons/PhotoCamera';



import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



import logo from '../Assets/images/olx-logo.png';


import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '../Assets/images/avatar.png';



const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(2),
        },
    },
    root1: {
        '& > *': {
            margin: theme.spacing(1),
            width: '30ch',
        },
    },
    root_button: {
        '& > *': {
            margin: theme.spacing(1),
        },
        root_submitbutton: {
            margin: theme.spacing(4),
        }
    },

    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(4),
    },

    
}));

// Button Css 





function Post() {

    const classes = useStyles();
    const [category, setCategory] = React.useState('');
    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <div>

            <div>
                <AppBar>
                    <Toolbar position="static" style={{ backgroundColor: "#eeeeee" }}>
                        <Link to="/" >
                        <IconButton disableRipple edge="start">
                            <ArrowBackIcon fontSize='large' style={{ color: 'black' }} />
                        </IconButton>
                        </Link>
                        <Link to="/">
                        <IconButton disableRipple edge="start" color="inherit" aria-label="menu">
                            <img src={logo} width="68px" height="48px" alt="olx-logo" />
                        </IconButton>
                        </Link>

                    </Toolbar>
                </AppBar>



                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="fixed" style={{ marginTop: '70px' }} >
                        <Typography id='add-type'>POST YOUR ADD</Typography>

                        <div className="Body_Post" >

                            <div className="post-head">
                                <Typography id="category">
                                    CHOOSE A CATEGORY
                                </Typography>
                            </div>


                            <div className="post-select" >

                                <FormControl className={classes.margin}>
                                    <InputLabel htmlFor="demo-customized-select-native">Category</InputLabel>
                                    <NativeSelect

                                        id="demo-customized-select-native"
                                        value={category}
                                        onChange={handleChange}
                                        input={<BootstrapInput />}
                                        style={{ width: 300 }}

                                    >
                                        <option aria-label="None" value="" style={{ fontSize: '14px', fontFamily: 'cursive' }} />
                                        <option style={{ fontSize: '16px', fontFamily: 'cursive' }} > Mobile &nbsp;&nbsp;&nbsp;</option>
                                        <option style={{ fontSize: '16px', fontFamily: 'cursive' }} >Fan</option>
                                        <option style={{ fontSize: '16px', fontFamily: 'cursive' }} > Car </option>
                                        <option style={{ fontSize: '16px', fontFamily: 'cursive' }}>Men's</option>
                                        <option style={{ fontSize: '16px', fontFamily: 'cursive' }}>Fan</option>
                                        <option style={{ fontSize: '16px', fontFamily: 'cursive' }}>Fan</option>
                                    </NativeSelect>
                                </FormControl>
                            </div>

                            <div className="post-info">
                                <Typography id="post-detail">
                                    INCLUDE SOME DETAILS
                                </Typography>

                                <div className={classes.root1} noValidate autoComplete="off">

                                    <Typography component="p" style={{ paddingLeft: '30px', fontSize: 14 }}> Ad title</Typography>
                                    <TextField margin='dense' style={{ width: "100%", paddingLeft: '30px', paddingRight: '30px' }} id="outlined-basic" variant="outlined" />
                                    <Typography component="p" style={{ paddingLeft: '30px', fontSize: 12 }}> Mention the key features of your item (e.g. brand, model, age, type)</Typography>
                                    <br />
                                    <Typography component="p" style={{ paddingLeft: '30px', fontSize: 14 }}> Description</Typography>
                                    <TextField style={{ width: "100%", paddingLeft: '30px', paddingRight: '30px' }} id="outlined-basic" variant="outlined" />
                                    <Typography component="p" style={{ paddingLeft: '30px', fontSize: 12 }}>    Include condition, features and reason for selling</Typography>
                                    <br />
                                    <Typography component="p" style={{ paddingLeft: '30px', fontSize: 14 }}> Condition</Typography>

                                    <div className={classes.root_button} style={{ paddingLeft: '30px', fontSize: 14 }}>
                                        <Button variant="outlined" color="secondary">New</Button>
                                        &nbsp;&nbsp;
                                        <Button variant="outlined" color="secondary">Used</Button>
                                    </div>

                                </div>

                            </div>


                            <div className="post-info">
                                <Typography id="post-detail">
                                    SET A PRICE
                                </Typography>

                                <div className={classes.root1} noValidate autoComplete="off">

                                    <Typography component="p" style={{ paddingLeft: '30px', fontSize: 14 }}> Price</Typography>
                                    <TextField style={{ width: "100%", paddingLeft: '30px', paddingRight: '30px' }} id="outlined-basic" variant="outlined" />

                                    <br />


                                </div>

                            </div>

                            <div className="post-info">
                                <Typography id="post-detail">
                                    UPLOAD A PICTURES
                                </Typography>


                            </div>


                            <div className="post-info">
                                <Typography id="post-detail">
                                    CONFIRM YOUR Location
                                </Typography>
                                <br />
                                <div className={classes.root1} noValidate autoComplete="off">

                                    <Typography component="p" style={{ paddingLeft: '30px', fontSize: 14 }}> State / City</Typography>
                                    <TextField style={{ width: "100%", paddingLeft: '30px', paddingRight: '30px' }} id="outlined-basic" variant="outlined" />

                                    <br />


                                </div>

                            </div>
                            <div className="post-info">
                                <Typography id="post-detail">
                                    REVIEW YOUR DETAILS
                                </Typography>

                                <div className={classes.root1} noValidate autoComplete="off" style={{ display: 'flex', width: "100%", paddingLeft: '30px', paddingRight: '30px' }}>


                                    <img src={Avatar} style={{ width: 100 }} alt="Awatar image" />
                                    <TextField style={{ width: "100%", paddingLeft: '20px', paddingTop: '10px', paddingRight: '5px' }} id="outlined-basic" variant="outlined" />

                                    <br />


                                </div>

                            </div>





                            <div >


                                <Button variant="contained" style={{ backgroundColor: '#21421E', color: 'white' }} disableRipple className={classes.margin}>
                                    <strong>Post Now</strong>
                                </Button>
                            </div>

                        </div>
                    </Container>
                </React.Fragment>



            </div>

        </div>
    )
}

export default Post;







// import React from 'react';
// import json2mq from 'json2mq';
// import useMediaQuery from '@material-ui/core/useMediaQuery';

// export default function JavaScriptMedia() {
//   const matches = useMediaQuery(
//     json2mq({
//       minWidth: 600,
//     }),
//   );

//   return <span>{`{ minWidth: 600 } matches: ${matches}`}</span>;
// }













