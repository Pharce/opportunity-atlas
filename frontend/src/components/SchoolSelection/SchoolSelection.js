import { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";



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

                <TextField id="standard-full-width" 
                    label="School"
                    placeholder="School Name" fullWidth margin="normal" 
                    InputLabelProps={{shrink:true,}}>
                </TextField>
                <h2>
                    If you have children at multiple schools, start by picking one. 
                </h2>
                <Link to ="/schoolquality">
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