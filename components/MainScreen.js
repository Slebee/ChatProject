'use strict'
import React, {
    Component,
    StyleSheet,
    TabBarIOS,
    Text,
    View,
    StatusBar,
    Image

} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
/*
* react-native-tab-navigator url:https://github.com/exponentjs/react-native-tab-navigator
*
* */

import ChatPage from './Chat/ChatPage.js'

export default class MainScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedTab:'home',
            presses:0,
            tabBarStatus:1
        }
    }
    changeTabBar(type){
        if(type=='hide'){
            this.setState({ tabBarStatus:0})
        }else{
            this.setState({ tabBarStatus:1})
        }
    }
    render(){
        var defaultName = 'ChatPage';
        var defaultComponent = ChatPage;
        return (
            <View style={{flex:1}}>
                <TabNavigator ref="tab" tabBarStyle={this.state.tabBarStatus==1 ? {} : styles.tabBarStyleHide}
                              sceneStyle={this.state.tabBarStatus==1 ? {} : styles.sceneStyleHide}>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        renderIcon={() => <Image source={require('../images/home.png')} />}
                        renderSelectedIcon={() => <Image source={require('../images/home.png')} />}
                        badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        <ChatPage changeTabBar={this.changeTabBar.bind(this)} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'profile'}
                        title="Profile"
                        renderIcon={() => <Image source={require('../images/home.png')} />}
                        renderSelectedIcon={() => <Image source={require('../images/home.png')} />}
                        renderBadge={() => {}}
                        onPress={() => this.setState({ selectedTab: 'profile' })}>
                        <Text>2</Text>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    tab:{
        flex:1
    },
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabBarStyleHide:{
        height: 0,
        overflow: 'hidden'
    },
    sceneStyleHide:{
        paddingBottom: 0
    }
});