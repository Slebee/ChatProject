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
    Navigator
} from 'react-native';
import Chat from './Chat.js'

var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
var PAGE_SIZE = 25;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL + PARAMS;

const data = [
    {
        "thumbnail":require('../../images/avatar.png'),
        "name":"标题1",
        "lastMsg":"你说的是真的吗?",
        "date":"17:35"
    },
    {
        "thumbnail":require('../../images/avatar.png'),
        "name":"标题2",
        "lastMsg":"你说的是真的吗?",
        "date":"17:35"
    },
    {
        "thumbnail":require('../../images/avatar.png'),
        "name":"标题3",
        "lastMsg":"你说的是真的吗?",
        "date":"17:35"
    },
    {
        "thumbnail":require('../../images/avatar.png'),
        "name":"标题4",
        "lastMsg":"你说的是真的吗?",
        "date":"17:35"
    }
]

export default class ChatList extends Component{
    constructor(props){
        super(props)
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
        this.renderChatItem = this.renderChatItem.bind(this);
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData() {
        /*fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                    loaded: true,
                });
            })
            .done();*/

        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data),
            loaded: true,
        })
    }
    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderChatItem}
                    style={styles.listView}
                    />
            </View>

        );
    }
    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading movies...
                </Text>
            </View>
        );
    }
    _onPressButton(name){
        const { navigator } = this.props;
        this.props.changeTabBar('hide');
        if(navigator) {
            navigator.push({
                name: 'Chat',
                component: Chat,
                title:name,
                leftButtonTitle: '< 微信',
                onLeftButtonPress: () => {
                    this.props.changeTabBar('show');
                    this.props.navigator.pop();
                },
                params:{
                    name:name,
                    changeTabBar:this.props.changeTabBar
                }
            })
        }

    }
    renderChatItem(person) {
        return (
            <TouchableHighlight onPress={this._onPressButton.bind(this,person.name)}>
                <View style={styles.container}>
                    <Image
                        source={person.thumbnail}
                        style={styles.thumbnail}
                        />
                    <View style={styles.rightContainer}>
                        <Text style={styles.lastMsg}>{person.lastMsg}</Text>
                    </View>
                </View>
            </TouchableHighlight>

        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomColor:'#ccc',
        borderBottomWidth:0.5,
        borderTopColor:'#ccc',
        borderTopWidth:0.5,
        paddingTop:10,
        paddingBottom:10,
    },
    rightContainer: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        marginBottom: 8,
        marginLeft:10,
        textAlign: 'left',
    },
    lastMsg: {
        color:'#999',
        marginLeft:10,
        textAlign: 'left',
    },
    date:{
        flex:1,
        color:'#999',
        textAlign:'right',
        marginRight:10
    },
    thumbnail: {
        width: 50,
        height: 50,
        resizeMode:'contain',
        marginLeft:10,
    },
    listView: {
        flexDirection:'column',
        height:700,
        backgroundColor: '#fff',
    },
    header:{
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,   // 处理iOS状态栏
        height: 68,   // 处理iOS状态栏
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent:'center',

    },
    title:{
        fontSize:18,
        color:'#fff'
    }
})