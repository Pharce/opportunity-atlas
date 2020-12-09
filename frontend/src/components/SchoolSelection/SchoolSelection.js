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
                    Now please indicate which you child attends (or will attend, if your child id below the age of 5):
                </h1>
                <div style = {{textAlign: 'center', paddingTop: '30vh'}}>
                    <input type='text' value = {this.state.searchTerm} onChange={this.editSearchTerm} placeholder="Search for a school"/>
                    <br></br>
                    <h3>These are the schools in your search</h3>
                    <NamesContainer names = {this.dynamicSearch()}/>
                </div>

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