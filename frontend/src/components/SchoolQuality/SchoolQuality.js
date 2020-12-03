import { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";



export default class SchoolQuality extends Component {

    constructor() {
        super(); 
    }

    render() {
        return(
            <Container>
                <h1>
                    According to AKEB's school ratings, you attend a quality school. 
                    See below for details according to different school ratings websites. 
                </h1>

                <Grid container spacing={3} >
                    <Grid item xs>GreatSchools</Grid>
                    <Grid item xs>Niche</Grid>
                    <Grid item xs>Stanford</Grid>
                </Grid>
                
                <h3>Student Progress - 8/10. This score indicates how much students are learning at the school over time.</h3>
                <h3>Test Scores - 7/10. This score indicates how well students do on standardized tests</h3>
                <h3>Equity - 8/10. This score indicates how well students help all students (from different cultures and backgrounds) learn.</h3>
                <Button variant="contained">Next</Button>
            </Container>
        );
    }
}