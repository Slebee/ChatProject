'use strict'
import React, {
    Component,
    StyleSheet,
    Text,
    View,
    StatusBar,
    NavigatorIOS,
    AlertIOS
} from 'react-native';

import ChatList from './ChatList.js'
export default class ChatPage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        var defaultName = '微信';
        var defaultComponent = ChatList;
        return(

            <View ref="view" style={styles.container}>
                <StatusBar
                    backgroundColor="black"
                    barStyle="light-content"
                    />
                <NavigatorIOS
                    style={styles.mainContainer}
                    initialRoute={{
                        component: defaultComponent,
                        title: defaultName,
                        passProps: { myProp: 'foo' ,changeTabBar:this.props.changeTabBar},
                        rightButtonTitle:'+',
                        onRightButtonPress: () => {
                            //this.props.changeTabBar('hide')
                            AlertIOS.alert('想添加好友？')
                        }
                      }}
                    barTintColor='#000'
                    tintColor='#fff'
                    titleTextColor='#fff'>
                    </NavigatorIOS>
            </View>

        )
    }
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        height:500
    },
    mainContainer:{
        flex:1
    }
});