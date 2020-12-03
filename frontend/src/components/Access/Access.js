import { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";



export default class Access extends Component {
    constructor() {
        super(); 
    }

    render() {
        return(
            <Container>
                <h1>
                    If you have any questions or would like to learn more about how to help your child achieve 
                    the highest-quality school and neighborhood environments possible, please fill out the form below
                    and a member of the ACCESS team will be in touch!
                </h1>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item xs={12}>
                        <TextField id="standard-basic" label="Name">Name</TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="standard-basic" label="Phone Number">Phone Number</TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="standard-basic" label="Email">Email</TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="standard-basic" label="Jamatkhana">Jamatkhana</TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="standard-basic" label="Your comments / questions">Your comments / questions</TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained">Submit</Button>
                    </Grid>
                </Grid>
                
            </Container>
        );
    }
}