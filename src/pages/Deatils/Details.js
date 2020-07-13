import React, {Component} from 'react';

import {Image} from 'react-native';
import {Container, Content, Card, CardItem, Body, Text} from 'native-base';
import axios from 'axios';
export default class Details extends Component {
  state = {
    name: '',
    nasa_jpl_url: '',
    is_potentially_hazardous_asteroid: '',
  };

  componentDidMount() {
    console.log('submitPress');
    const {astroId} = this.props.route.params;

    const url = `https://api.nasa.gov/neo/rest/v1/neo/${astroId}?api_key=lyWO1gqYnooaMEPaSUDYOO4k7fgmmMfi6NSNIHjq`;

    axios
      .get(url)
      .then((response) => {
        if (response.data != undefined) {
          this.setState({
            name: response.data.name,
            nasa_jpl_url: response.data.nasa_jpl_url,
            is_potentially_hazardous_asteroid:
              response.data.is_potentially_hazardous_asteroid,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem header>
              <Text> Asteroid Deatils</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{`Nanameme : ${this.state.name}`}</Text>

                <Text>{`NASA nasa_jpl_url : ${this.state.nasa_jpl_url}`}</Text>
                <Text>
                  {`is_potentially_hazardous_asteroid : ${this.state.is_potentially_hazardous_asteroid}`}
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
