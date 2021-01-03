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
            loading: false,
            latitude: 31,
            longitude: -85,
            equity_rating: -1,
            greatschools_rating: -1,
            akeb_rating: -1,
            progress_rating: -1,
            test_rating: -1,
            stanford_rating: -1,
            niche_rating: -1,
        }
    }

    editSearchTerm = (e) => {
        this.setState({searchTerm : e.target.value });
        this.dynamicRecall();
    }


    dynamicRecall = () => {
        if(this.state.searchTerm.length > 0) {
            axios
                .get("http://127.0.0.1:8000/api/schools/", {
                    params: { 
                        school_prefix: this.state.searchTerm,
                        latitude: this.state.latitude,
                        longitude: this.state.longitude
                    }
                })
                .then(res => {
                    this.setState({
                        names: res.data
                    });
                    console.log(res.data);
                    this.updateRatings();
                })
                .catch(err => {
                    console.log(err);
                })
        }
    } 

    dynamicSearch = () => {
        return this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }

    updateRatings = () => {
        if (this.state.names.length > 0) {
            this.setState({
                niche_rating: this.state.names[0].niche_rating,
                stanford_rating: this.state.names[0].stanford_rating,
                greatschools_rating: this.state.names[0].greatschools_rating,
                akeb_rating: this.state.names[0].akeb_rating,
                progress_rating: this.state.names[0].progress_rating,
                test_rating: this.state.names[0].test_rating,
                equity_rating: this.state.names[0].equity_rating,
            })
        }
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
                        progress: this.state.progress_rating,
                        scores: this.state.test_rating,
                        equity: this.state.equity_rating,
                        greatschools: this.state.greatschools_rating,
                        niche: this.state.niche_rating,
                        stanford: this.state.akeb_rating
                    }
                }}
                    onClick={this.updateRatings}
                >
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