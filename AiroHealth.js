import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import graphPage from './graphPage';

import {
    StackNavigator,
} from 'react-navigation';
import { Container, Header, Title, Content, Footer, FooterTab,
    Button, Left, Right, Body, Icon, Card, CardItem, Grid, Col,
    Row,List,ListItem } from 'native-base';


export default class AiroHealth extends Component {
    render() {

        const App = StackNavigator({
            Next: { screen: graphPage },
            Home: { screen: AiroHealth },
        });

        return (

            <Container>
                <Header>
                    <Left>
                        <Button transparent
                                onPress={()=>this.props.navigation.navigate('Next')}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Home</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Card>
                        <CardItem>
                            <Text style={styles.titleText}> Welcome back, Maryam! </Text>
                        </CardItem>

                        <CardItem>
                            <Text style={styles.titleText}> Have a light snack before 3 pm.</Text>
                        </CardItem>
                    </Card>
                    <Grid>
                        <Col style={{ backgroundColor: 'green', height: 60 }}>
                            <Text style={{textAlign:'left',fontSize:17,color:'white'}}>PROGRESS</Text>
                        </Col>
                        <Col style={{ backgroundColor: 'green', height: 60  }}>
                            <Text style={{fontWeight:'bold', textAlign:'right',fontSize:17,color:'white'}}>ON TRACK</Text>
                        </Col>
                    </Grid>

                    <Grid>
                        <Col>
                            <Row>
                                <Text style={styles.titleText}>Calories</Text>
                            </Row>
                            <Row>
                                <Text style={{fontSize:27, fontWeight:'bold', color:'green',margin:10}}>1430</Text>
                            </Row>
                        </Col>
                        <Col>
                            <Image style={{height:30,width:40,padding:40}} source={require('./icons/progressBar.png')} />
                        </Col>
                        <Col>
                            <Row>
                                <Text style={styles.titleText}>Active</Text>
                            </Row>
                            <Row>
                                <Text style={{fontSize:27, fontWeight:'bold', color:'dodgerblue',margin:10}}>Low</Text>
                            </Row>
                        </Col>
                        <Col>
                            <Image style={{height:30,width:40,padding:40}} source={require('./icons/running.png')} />
                        </Col>
                    </Grid>

                    <Grid>
                        <Col>
                            <Row>
                                <Text style={styles.titleText}>Pulse</Text>
                            </Row>
                            <Row>
                                <Text style={{fontSize:25, fontWeight:'bold', color:'orange',margin:10}}>70bpm</Text>
                            </Row>
                        </Col>
                        <Col>
                            <Image style={{height:30,width:40,padding:40}} source={require('./icons/pulse.png')} />
                        </Col>
                        <Col>
                            <Row>
                                <Text style={styles.titleText}>Stress</Text>
                            </Row>
                            <Row>
                                <Text style={{fontSize:27, fontWeight:'bold', color:'red',margin:10}}>High</Text>
                            </Row>
                        </Col>
                        <Col>
                            <Image style={{height:30,width:40,padding:40}} source={require('./icons/stress.png')} />
                        </Col>
                    </Grid>

                    <Grid>
                        <Col style={{backgroundColor: 'red', height: 60 }}>
                            <Text style={{textAlign:'left',fontSize:17,color:'white'}}>GOALS</Text>
                        </Col>
                        <Col style={{backgroundColor: 'red', height: 60  }}>
                            <Text style={{fontWeight:'bold', textAlign:'right',fontSize:17,color:'white'}}>3/5</Text>
                        </Col>
                    </Grid>

                    <List>
                        <ListItem>
                            <Text style={{fontSize:17, fontWeight:'bold'}}> Random Goal 1</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={{fontSize:17, fontWeight:'bold'}}> Superior Goal 36</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={{fontSize:17, fontWeight:'bold'}}> Superior Goal 22</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={{fontSize:17, fontWeight:'bold'}}> Superior Goal 11</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={{fontSize:17, fontWeight:'bold'}}> Random Goal 7</Text>
                        </ListItem>
                    </List>



                </Content>

            </Container>

        );
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 23,
        fontWeight: 'bold',

    },
});
AppRegistry.registerComponent('AiroHealth', () => AiroHealth);