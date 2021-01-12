import { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import * as emailjs from 'emailjs-com';
import { Link } from "react-router-dom";



export default class Access extends Component {
    constructor() {
        super(); 
        this.state = {
            name : '',
            number: '',
            email: '', 
            jamatkhana : '',
            comments: '', 
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        console.log(this.state); 
    }

    handleSubmit(event) {
        event.preventDefault(); 
        let templateParams = {
            from_name: this.state.email,
            to_name: 'AKEB',
            subject: this.state.name,
            message: this.state.comments,
        }

        emailjs.send(
            'service_415suiq',
            'template_6lqvmhb',
            templateParams,
            'user_ZXoEDF12TdZ7KT2Hv8eWA'
        ).then(res => {
            console.log('success!');
        }, function(err) {
            console.log('Failled!..')
        }
        )
    }


    render() {
        return(
            <Container>
                <h1>
                    If you have any questions or would like to learn more about how to help your child achieve 
                    the highest-quality school and neighborhood environments possible, please fill out the form below
                    and a member of the ACCESS team will be in touch!
                </h1>
                <Grid container width={1}>
                    <Grid item xs={12}>
                        <TextField id="standard-full-width" 
                            label="Name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            >Name</TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            id="standard-full-width" 
                            label="Phone Number"
                            name="number"
                            value={this.state.number}
                            onChange={this.handleInputChange}
                        >Phone Number</TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            id="standard-full-width" 
                            label="Email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            >Email</TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            id="standard-full-width" 
                            label="Jamatkhana"
                            name="jamatkhana"
                            value={this.state.jamatkhana}
                            onChange={this.handleInputChange}
                            >Jamatkhana</TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="standard-full-width" 
                            label="Your comments / questions"
                            name="comments"
                            value={this.state.comments}
                            onChange={this.handleInputChange}
                            >Your comments / questions</TextField>
                    </Grid>
                    <Link to ="/">
                        <Grid item xs={12}>
                            <Button variant="contained" type= "submit" onSubmit={this.handleSubmit} onClick={this.handleSubmit}>Submit</Button>
                        </Grid>
                    </Link>
                    
                </Grid>
            </Container>
        );
    }
}