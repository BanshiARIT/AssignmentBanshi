import React, {Component} from 'react';
import {Container, Content, Text} from 'native-base';
import {FlatList, View} from 'react-native';
import axios from 'axios';
export default class Auth extends Component {
  state = {
    arrStroIDs: [],
  };
  componentDidMount() {
    const url = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=lyWO1gqYnooaMEPaSUDYOO4k7fgmmMfi6NSNIHjq`;

    axios
      .get(url) 
      .then((response) => {
        if (response.data.near_earth_objects != undefined) {
          this.setState({arrStroIDs: response.data.near_earth_objects});
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getListViewItem = (item) => {
    this.props.navigation.navigate('Details', {
      astroId: item.id,
    });
  };
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };
  render() {
    return (
      <Container>
        <Content>
          <FlatList
            data={this.state.arrStroIDs}
            renderItem={({item}) => (
              <Text
                style={{padding: 10, fontSize: 18, height: 44}}
                onPress={this.getListViewItem.bind(this, item)}>
                {item.id}
              </Text>
            )}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </Content>
      </Container>
    );
  }
}
