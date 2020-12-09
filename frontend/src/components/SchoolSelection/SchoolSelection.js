import { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";



export default class SchoolSelection extends Component {
    constructor() {
        super(); 
        this.state = {
            names : [
                'Elementary School',
                'Middle School',
                'High School'
            ],
            searchTerm : ''
        }
    }

    editSearchTerm = (e) => {
        this.setState({searchTerm : e.target.value })
    }

    dynamicSearch = () => {
        return this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }

    render() {
        return(
            <Container>
                <h1>
                    Now please indicate which you child attends (or will attend, if your child is below the age of 5):
                </h1>
                <h2>
                    If you have children at multiple schools, start by picking one. 
                </h2>
                <TextField id="standard-full-width" 
                    label="School"
                    placeholder="School Name" fullWidth margin="normal" 
                    onChange={this.editSearchTerm}
                    value = {this.state.searchTerm}
                    InputLabelProps={{shrink:true,}}>
                </TextField>
                <NamesContainer names = {this.dynamicSearch()}/>
                
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

class NamesContainer extends Component {
    render() {
        return (
            <div>
                {this.props.names.map(name => <Name name = {name}/>)}
            </div>
        );
    }
}

class Name extends Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}