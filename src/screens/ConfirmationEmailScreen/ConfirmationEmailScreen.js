import React,{useState} from 'react';
import { View, Text ,StyleSheet, ScrollView} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomerInut from '../../comments/CustomerInput/CustomerInput';
import CustomerButton from '../../comments/CustomerButton/CustomerButton';
import SocialSingInButtons from '../../comments/SocialSingInButtons';
import { useNavigation } from '@react-navigation/native';

const ConfirmationEmailScreen = () => {
    const [code,setCode]=useState('');
    const navigation=useNavigation();

    const onConfirmPressed= () =>{
        navigation.navigate('Home');

    }

    const onSignInPressed= () =>{
        navigation.navigate('SingIn');

    }
    const onResendPressed= () =>{
        console.warn("onResendPressed");

    }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title} >Confirm your email</Text>

      <CustomerInut 
      placeholder="Enter you confirmation code" 
      value={code} 
      setValue={setCode}>
     </CustomerInut>

     

      <CustomerButton 
      onPress={onConfirmPressed}
      text="Confirm">
      </CustomerButton>

      <CustomerButton 
      text="Resend Code" 
      onPress={onResendPressed}
      type="SECONDARY">
      </CustomerButton>

      <CustomerButton 
      text="Back to Sign in" 
      onPress={onSignInPressed}
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

export default ConfirmationEmailScreen;