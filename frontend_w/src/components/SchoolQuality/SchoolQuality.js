import { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import { Fab } from "@material-ui/core"; 
import  QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";


export default class SchoolQuality extends Component {

    constructor() {
        super(); 
        this.state = {
            progress: 5,
            scores: 7,
            equity: 8,
            greatschools: 6,
            niche: 6,
            stanford: 3
        }
    }

    componentDidMount() {
        const { progress, scores, equity, greatschools, niche, stanford } = this.props.location.state;
        this.setState({
            progress: progress,
            scores: scores,
            equity: equity,
            greatschools: greatschools,
            niche: niche,
            stanford: stanford
        })

        console.log(this.state);
    }

    ColorStyle = (rating) => {
        if( rating == -1 || rating == "Not rated" || rating == "") {
            return { color: 'blue' }
        }
        if (rating == "D" || rating == "C" || (rating < 4 && rating > -1)) {
            return { color: 'red'};
        }
        if(rating =="B" || (rating >= 4 && rating < 7)) {
            return { color: 'yellow'};
        }
        if(rating =="A" || rating >= 7) {
            return { color: 'green'};
        }
    }

    ColorDiv = (rating) => {
        if( rating == -1 || rating == "Not rated" || rating == "") {
            return <div style = {this.ColorStyle(rating)}>Not rated</div>
        }
        else {
            return <div style = {this.ColorStyle(rating)}>{rating}</div>
        }
    }
    render() {
        return(
            
            <Container>
                
                <h1>
                    According to AKEB's school ratings, you attend a quality school. 
                    See below for details according to different school ratings websites. 
                </h1>

                <Grid container spacing={3} >
                    <Grid item xs style={this.ColorStyle(this.state.greatschools)}>GreatSchools</Grid>
                    <Grid item xs style={this.ColorStyle(this.state.niche)}>Niche</Grid>
                    <Grid item xs style={this.ColorStyle(this.state.stanford)}>Stanford</Grid>
                </Grid>
                
                <h3>Student Progress - <div style={this.ColorStyle(this.state.progress)}>{this.state.progress}/10</div>. This score indicates how much students are learning at the school over time.</h3>
                <h3>Test Scores - <div style={this.ColorStyle(this.state.scores)}>{this.state.scores}/10</div>. This score indicates how well students do on standardized tests</h3>
                <h3>Equity - <div style={this.ColorStyle(this.state.equity)}>{this.state.equity}/10</div>. This score indicates how well students help all students (from different cultures and backgrounds) learn.</h3>
                <Link to ="/access">
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