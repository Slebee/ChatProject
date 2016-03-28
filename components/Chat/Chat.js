'use strict'
import React, {
    Component,
    StyleSheet,
    TabBarIOS,
    Text,
    View,
    Image,
    ListView,
    TouchableHighlight,
    StatusBar,
    Dimensions,
    Navigator
} from 'react-native';

const { width, height } = Dimensions.get('window');
export default class Chat extends Component {
    constructor(props){
        super(props)

    }
    render(){
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="black"
                    barStyle="light-content"
                    />
                <Text style={{marginTop:100}}>聊天详情页</Text>
                <View style={styles.bottomBar}>
                </View>
            </View>

        )
    }
    componentDidMount(){
        //console.log(this.props.route)
        //this.props.route.params.changeTabBar('hide');
    }
    _renderMsg(msg){
        if(msg.char ==1){
            return (
                <View>

                </View>
            )
        }
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
    bottomBar:{
        width:width,
        height:30,
        backgroundColor:'#ccc',
        position:'absolute',
        left:0,
        bottom:0
    }
})