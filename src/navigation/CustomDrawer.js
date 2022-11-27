import { Text, StyleSheet, View , Image, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import { DrawerContentScrollView , DrawerItemList } from '@react-navigation/drawer'
import Icon from "react-native-vector-icons/Ionicons"

export default class CustomDrawer extends Component {
constructor(props){
    super(props);
}
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex:1}}>
        <DrawerContentScrollView {...this.props}>
          <View style={styles.header}>
            <Image source={require("../../assets/profile.png")} style={styles.avatar}/>
            <Text style={{fontSize:24,color:"#333",fontWeight:"bold"}}>Personal Assistant</Text>
            <Text style={{fontSize:16,color:"#333",}}>Everythink about you</Text>
          </View>
          <View style={{height:1.5,width:"100%",backgroundColor:"#ccc",marginVertical:5}}/>
          <DrawerItemList {...this.props}/>
          <View style={styles.footer}>
            <TouchableOpacity onPress={()=>{navigation.navigate("SingIn")}} style={styles.logoutButton}>
                <View style={styles.buttonContent}>
                  <Icon name='exit-outline' size={22} color={"#333"}/>
                  <Text style={{color:"#333",fontSize:15,marginHorizontal:5}}>Logout</Text>
                </View>
            </TouchableOpacity>
          </View>
        </DrawerContentScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header:{
    marginHorizontal:15,
    marginVertical:10
  },
  avatar:{
    height:100,
    width:100,
    borderRadius:100,
    borderColor:"white",
    borderWidth:2
  },footer:{
    padding:20,
    borderTopWidth:1,
    borderTopColor:"#ccc"
  },
  buttonContent:{
    flexDirection:"row"
  },
  logoutButton:{
    
  }
})