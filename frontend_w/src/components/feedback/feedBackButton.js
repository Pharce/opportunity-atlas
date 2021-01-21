import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Component } from "react";
import axios from "axios";



export default class FeedBackButton extends Component {
  constructor() {
    super(); 
    this.state = {
        feedback: ''
    }
  }

  editFeedback = (e) => {
    this.setState({feedback : e.target.value });
    console.log(this.state.feedback);
  }

  submitFeedback = (e) => {
    axios.post("http://localhost:8000/api/access/", {
      params: {
        name: "",
        number: "",
        email: "", 
        jamatkhana: "",
        comments: this.state.feedback
      }
    }).then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
  }


  render() {
    
    return (
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Questions or feedback?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                
            </Typography>
            <TextField id="standard-basic" label="feedback" onChange={this.editFeedback}/>
            <Button variant="contained" onClick={this.submitFeedback}>Submit</Button>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }
}
