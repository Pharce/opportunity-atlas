import { Component } from "react";
import Container from '@material-ui/core/Container';
import testimage  from './testimage.PNG';
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Button from "@material-ui/core/Button";


export default class Atlas extends Component {
    constructor() {
        super(); 
    }

    render() {
        return(
            <Container>
                <h1>
                    According to <a href="OpportunityAtlas.org">OpportunityAtlas.org</a>, you live in a <div style= {{ color: 'red'}}> low</div> opportunity neighborhood.
                </h1>
                <img src={testimage} alt="TestImage"/>
                <h2>
                    The Opportunity Atlas estimates how well neighborhoods help children achieve better future life outcomes.
                    (like income, college attendance, etc.)
                </h2>

                <h3>
                    If your neighborhood quality doesn't appear to be as high as you would like, don't worry: the jamati institutions
                    are here to work with you to explore options together. Click <Link to="/access">here</Link> to reach out. 
                </h3>

                <Link to ="/schoolselection">
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