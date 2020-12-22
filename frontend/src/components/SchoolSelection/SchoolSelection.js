import { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import axios from 'axios';



export default class SchoolSelection extends Component {
    constructor() {
        super(); 
        this.state = {
            names : [
                'Elementary School',
                'Middle School',
                'High School'
            ],
            searchTerm : '',
            loading: false
        }
    }

    editSearchTerm = (e) => {
        this.setState({searchTerm : e.target.value });
        this.dynamicRecall();
    }


    dynamicRecall = () => {
        axios
            .get("http://127.0.0.1:8000/api/schools/", {
                params: { 
                    school_prefix: this.state.searchTerm 
                }
            })
            .then(res => {
                this.setState({
                    names: res.data
                });
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
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
                <NamesContainer names = {this.state.names}/>
                
                <Link to ={{
                    pathname: "/schoolquality",
                    state : {
                        progress: 10,
                        scores: 10,
                        equity: 10,
                        greatschools: this.state.names[0].greatschools_rating,
                        niche: this.state.names[0].niche_rating,
                        stanford: this.state.names[0].akeb_rating
                    }
                }}>
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
                School Name - {this.props.name.school_name}
            </div>
        )
    }
}