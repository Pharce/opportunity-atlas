import { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";



export default class SchoolSelection extends Component {
    constructor() {
        super(); 
    }

    render() {
        return(
            <Container>
                <h1>
                    Now please indicate which you child attends (or will attend, if your child id below the age of 5):
                </h1>

                <TextField id="standard-basic" label="Standard"></TextField>
                <h2>
                    If you have children at multiple schools, start by picking one. 
                </h2>
                <Button variant="contained">Next</Button>
            </Container>
        );
    }
}