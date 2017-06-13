import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import { DrawerNavigator, StackNavigator } from "react-navigation";
import { Container, Header, Title, Content, Footer, FooterTab,
    Button, Left, Right, Body, Icon, Card, CardItem, Grid, Col,
    Row,List,ListItem,Picker } from 'native-base';
const Item = Picker.Item;




export default class graphPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'key1',
            results: {
                items: []
            }
        }
    }
    onValueChange (value: string) {
        this.setState({
            selected1 : value
        });
    }
    render() {
        return (

            <Container style={{backgroundColor:'grey'}}>
                <Header style={{backgroundColor:'orange'}}>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Progress</Title>
                    </Body>
                    <Right />
                </Header>

                <Content>

                    <Picker style={{width:150,color:'white'}}
                            iosHeader="Select one"
                            mode="dropdown"
                            selectedValue={this.state.selected1}
                            onValueChange={this.onValueChange.bind(this)}>
                        <Item label="Something else" value="key0" />
                        <Item label="Stress&Activity" value="key1" />

                    </Picker>



                </Content>

            </Container>

        );
    }
}
AppRegistry.registerComponent('graphPage', () => graphPage);