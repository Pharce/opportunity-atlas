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
            tract: -1,
            atlasimage: '',
            imageset: false
        }
    } 



    async componentDidMount() {
        const { address } = await this.props.location.state;
        await this.setState({
            neighborhood_address: address
        });
        console.log(this.state.neighborhood_address); 
        console.log(this.state.neighborhood_rating);
        const response = await axios
                .get("/geocoder/geographies/onelineaddress", {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
                        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
                    },
                    params: { 
                        address: address,
                        benchmark: "Public_AR_Current",
                        vintage: "Census2010_Current",
                        format: "json"
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        const tract_id = await response.data.result.addressMatches[0].geographies["Census Tracts"][0].GEOID

        const latitude = await response.data.result.addressMatches[0].coordinates.y
        const longitude = await response.data.result.addressMatches[0].coordinates.x

        console.log(tract_id)
        console.log(latitude)
        
        const response_2 = await axios
                .get("http://127.0.0.1:8000/api/neighborhoods/", {
                    params: {
                        tract_id: "" + tract_id.substring(0, 11)
                    }
                }).catch(err => {
                    console.log(err); 

                }); 

        await this.setState({
            atlasimage: "https://ng-atlas.s3.ca-central-1.amazonaws.com/atlas_screenshots/" + tract_id.substring(0, 11) + '.png',
            tract: tract_id,
            latitude: latitude,
            longitude: longitude,
            imageset: true
        })

        console.log(this.state.atlasimage);
        console.log(response_2.data);

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
                <AtlasImage atlasimage={this.state.atlasimage} imageset={this.state.imageset}/>
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

class AtlasImage extends Component {
    render() {
        if(this.props.imageset) {
            return(
                <img src={this.props.atlasimage} width="100%"></img>
            )
        }
        else {
            return(
                <iframe url="https://opportunityatlas.org/" />
            )
        }
    }
}