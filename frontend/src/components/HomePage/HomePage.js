import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { render } from 'react-dom';
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";



export default class HomePage extends Component {
    constructor() {
        super(); 
    }


    render() {
        return (
            <Container>
                <h1>
                    School and Neighborhood Mirror
                </h1>
                <h2>
                    The quality of your child's school and Neighborhood can have a large impact on their future. 
                    Does your child live in a high quality neighborhood and attend a high quality school?
                </h2>
                <h3>
                    Enter your home address to get started. 
                </h3>
                <TextField id="standard-full-width" 
                    label="Address" style= {{ margin: 8 }} 
                    placeholder="Address" fullWidth margin="normal" 
                    InputLabelProps={{shrink:true,}}>
                </TextField>
                <Link to ="/atlas">
                    <Button variant="contained"
                            color="black"
                            endIcon={<ArrowForwardIosIcon>Next</ArrowForwardIosIcon>}>
                                Next
                    </Button>
                </Link>
            </Container>
        );
    }
}