import { Component } from "react";
import Container from '@material-ui/core/Container';



export default class Atlas extends Component {
    constructor() {
        super(); 
    }

    render() {
        return(
            <Container>
                <h1>
                    According to OpportunityAtlas.org, you live a low opportunity neighborhood.
                </h1>

                <h2>
                    The Opportunity Atlas estimates how well neighborhoods help children achieve better future life outcomes.
                    (like income, college attendance, etc.)
                </h2>

                <h3>
                    If your neighborhood quality doesn't appear to be as high as you would like, don't worry: the jamati institutions
                    are here to work with you to explore options together. Click here to reach out. 
                </h3>
            </Container>
        );
    }
}