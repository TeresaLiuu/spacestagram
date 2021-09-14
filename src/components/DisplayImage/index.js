import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


const API_KEY = "jqEIP8jnSKUVM3CsAjTELRlaMRw5u8RfKTCXYtz8"
const IMAGE_COUNT = 5

class DisplayImage extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        this.getImageData();
    }

    getImageData(){
        // Reference: https://api.nasa.gov/
        axios.get(`https://api.nasa.gov/planetary/apod?count=${IMAGE_COUNT}&api_key=${API_KEY}`)
        .then(response => {
            const data = response.data
            this.setState({ data });

            // TODO: REMOVE LATER
            console.log(data);
        })
        .catch(error => {
            throw new Error(error);
        });
    }

    // copyright: "Tony Hallas"
    // date: "2013-08-30"
    // explanation: "These three bright nebulae are often featured in telescopic tours of the constellation Sagittarius and the crowded starfields of the central Milky Way. In fact, 18th century cosmic tourist Charles Messier cataloged two of them; M8, the large nebula left of center, and colorful M20 on the right. The third, NGC 6559, is above M8, separated from the larger nebula by a dark dust lane. All three are stellar nurseries about five thousand light-years or so distant. The expansive M8, over a hundred light-years across, is also known as the Lagoon Nebula. M20's popular moniker is the Trifid. Glowing hydrogen gas creates the dominant red color of the emission nebulae, with contrasting blue hues, most striking in the Trifid, due to dust reflected starlight. The colorful skyscape recorded with telescope and digital camera also includes one of Messier's open star clusters, M21, just above the Trifid."
    // hdurl: "https://apod.nasa.gov/apod/image/1308/SagTriplet6D_hallasNew.jpg"
    // media_type: "image"
    // service_version: "v1"
    // title: "A Sagittarius Triplet"
    // url: "https://apod.nasa.gov/apod/image/1308/SagTriplet6D_hallasNew950.jpg"
    
    // <p>Title: {image.title}</p>
    // <p>Date: {image.date}</p>
    // <p>Explanations: {image.explanation}</p>
    // <img src={image.url} alt={image.title} />


    render() {
        return (  
            <div>
                {this.state.data.map(image => (
                    <div key={image.title}>
                        <Row className="row justify-content-center mt-3" >
                            <Card className="text-center" style={{ width: '35rem' }}>
                                <Card.Img className="mt-3" variant="top" src={image.url} alt={image.title} />
                                <Card.Body>
                                <Card.Title>{image.title}</Card.Title>
                                <Card.Text>{image.explanation}</Card.Text>
                                <Button variant="primary">Like</Button>
                                </Card.Body>
                            </Card>
                        </Row>
                    </div>
                ))}
            </div>
        )
    }
}

export default DisplayImage;


