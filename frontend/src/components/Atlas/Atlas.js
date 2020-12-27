import { Component } from "react";
import Container from '@material-ui/core/Container';
import testimage  from './testimage.PNG';
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Button from "@material-ui/core/Button";

export default class Atlas extends Component {
    constructor() {
        super(); 
        this.state = {
            neighborhood_rating: 5,
            neighborhood_image: './testimage.PNG',
            neighborhood_alt: 'TestImage',
            neighborhood_address: '',
        }
    }

    componentDidMount() {
        const { address } = this.props.location.state;
        this.setState({
            neighborhood_address: address
        })
        console.log(this.state.neighborhood_address);
        const iframeWindow = document.getElementById("myIframe");
        console.log(iframeWindow.document);
    }

    ColorDiv = () => {
        console.log(this.state.neigborhood_rating);
        let rating = this.state.neighborhood_rating;
        if (rating < 4) {
            return <div style= {{ color: 'red'}}>lower</div>;
        }
        if(rating >= 4 && rating < 7) {
            return <div style= {{ color: 'yellow'}}>medium</div>;
        }
        if(rating >= 7) {
            return <div style= {{ color: 'green'}}>great</div>;
        }
    }

    render() {
        let rating = this.state.neighborhood_rating;
        return(
            <Container>
                <h1>
                    According to <a href="OpportunityAtlas.org">OpportunityAtlas.org</a>, you live in a 
                    {this.ColorDiv()} opportunity neighborhood.
                </h1>
                <iframe id="myIframe" src="https://opportunityatlas.org" title="opportunity"></iframe>
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