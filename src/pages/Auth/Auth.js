import React, {Component} from 'react';
import {Container, Content, Item, Input, Button, Text} from 'native-base';
export default class RoundedTextboxExample extends Component {
  state = {
    astroID: '',
  };
  submitPress = () => {
    this.props.navigation.navigate('Details', {
      astroId: this.state.astroID,
    });
  };

  submitAstroIDPress = () => {
    this.props.navigation.navigate('Asteroids');
  };

  render() {
    return (
      <Container>
        <Content>
          <Item
            style={{
              width: '80%',
              alignSelf: 'center',
              marginTop: 100,
              marginBottom: 100,
            }}>
            <Input
              placeholder="Enter Asteroid ID"
              keyboardType="numeric"
              onChangeText={(astroID) => {
                this.setState({astroID});
              }}
              value={this.state.astroID}
            />
          </Item>

          <Button
            rounded
            disabled={this.state.astroID != '' ? false : true}
            style={{
              width: '60%',
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop: 100,
              marginBottom: 100,
            }}
            onPress={() => this.submitPress()}>
            <Text>Submit</Text>
          </Button>

          <Button
            rounded
            style={{
              width: '60%',
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop: 30,
              marginBottom: 30,
            }}
            onPress={() => this.submitAstroIDPress()}>
            <Text>Random Asteroid</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
