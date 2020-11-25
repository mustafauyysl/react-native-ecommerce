import React,{Component} from 'react';
import { View, Text } from 'react-native';

class ProfileScreen extends Component{
    static navigationOptions = {
        tabBarBadge: 2
    }
    render(){
        return(
            <View>
                <Text>ProfileScreen</Text>
            </View>
        )
    }
}


export default ProfileScreen;