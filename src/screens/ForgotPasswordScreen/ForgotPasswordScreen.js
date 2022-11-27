import React,{useState} from 'react';
import { View, Text ,StyleSheet, ScrollView} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomerInut from '../../comments/CustomerInput/CustomerInput';
import CustomerButton from '../../comments/CustomerButton/CustomerButton';
import SocialSingInButtons from '../../comments/SocialSingInButtons';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen= () => {
    const [username,setUsername]=useState('');
    const navigation=useNavigation();

    const onSendPressed= () =>{
        navigation.navigate('NewPassword');

    }

    const onSingInPressed= () =>{
      navigation.navigate('SingIn');

    }
    

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title} >Reset your password</Text>

      <CustomerInut 
      placeholder="Username" 
      value={username} 
      setValue={setUsername}>
     </CustomerInut>

     

      <CustomerButton 
      onPress={onSendPressed}
      text="Send">
      </CustomerButton>

      <CustomerButton 
      text="Back to Sign in" 
      onPress={onSingInPressed}
      type="TARTIARY">
      </CustomerButton>
    </View>
    </ScrollView>
  );
};

const styles =StyleSheet.create({
    root:{
        alignItems:'center',
        padding:20,
    },
    title:{
     fontSize:24,
     fontWeight:'bold',
     color: '#051c60',
     margin:10,
    },
    text:{
        color:'gray',
        marginVertical:10,
    },
    link:{
       color:'#FDB075',
    },
});

export default ForgotPasswordScreen;