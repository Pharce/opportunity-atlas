import { Component } from "react";
import Container from '@material-ui/core/Container';
import testimage  from './testimage.PNG';
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Button from "@material-ui/core/Button";
import axios from "axios"; 


export default class Atlas extends Component {
    constructor() {
        super(); 
        this.state = {
            neighborhood_rating: 5,
            neighborhood_image: './testimage.PNG',
            neighborhood_alt: 'TestImage',
            neighborhood_address: '',
            latitude: 31,
            longitude: 85,
            tract: 48157672900,
            atlasimage: '',
        }
    } 



    async componentDidMount() {
        const { address } = this.props.location.state;
        await this.setState({
            neighborhood_address: address
        });
        console.log(this.state.neighborhood_address); 
        console.log(this.state.neighborhood_rating);
        await axios
                .get("/geocoder/geographies/onelineaddress", {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
                        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
                    },
                    params: { 
                        address: '2234 167th Ave, SE, Bellevue, WA, 98008, USA',
                        benchmark: "Public_AR_Current",
                        vintage: "Current_Current",
                        format: "json"
                    }
                })
                .then(res => {
                    console.log(res.data.result.addressMatches[0].coordinates);
                    console.log(res.data.result.addressMatches[0].geographies["2010 Census Blocks"][0].GEOID)
                    this.setState({
                        latitude: res.data.result.addressMatches[0].coordinates.x,
                        longitude: res.data.result.addressMatches[0].coordinates.y,
                        tract: res.data.result.addressMatches[0].geographies["2010 Census Blocks"][0].GEOID
                    })
                })
                .catch(err => {
                    console.log(err);
                });
        await axios
                .get("http://127.0.0.1:8000/api/neighborhoods/", {
                    params: {
                        tract_id: this.state.tract
                    }
                })
                .then(res => {
                    console.log(res.data[0].neighborhood_quality); 
                    this.setState({
                        neighborhood_rating: res.data[0].neighborhood_quality,
                    })
                    console.log(this.state.neighborhood_rating); 

                })
                .catch(err => {
                    console.log(err); 
                }); 
        await this.setState({
            atlasimage: 'https://ng-atlas.s3.ca-central-1.amazonaws.com/atlas_screenshots/' + this.state.tract + '.png',
        })
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
                <img src={this.state.atlasimage} width="100%"></img>
                <h2>
                    The Opportunity Atlas estimates how well neighborhoods help children achieve better future life outcomes.
                    (like income, college attendance, etc.)
                </h2>

                <h3>
                    If your neighborhood quality doesn't appear to be as high as you would like, don't worry: the jamati institutions
                    are here to work with you to explore options together. Click <Link to="/access">here</Link> to reach out. 
                </h3>

                <Link to = {{
                    pathname:"/schoolselection",
                    state : {
                        latitude: this.state.latitude,
                        longitude: this.state.longitude
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