import React,{useState} from 'react';
import { View, Text ,StyleSheet, ScrollView} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomerInut from '../../comments/CustomerInput/CustomerInput';
import CustomerButton from '../../comments/CustomerButton/CustomerButton';
import SocialSingInButtons from '../../comments/SocialSingInButtons';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [passwordRepeat,setPasswordRepeat]=useState('');
    const navigation = useNavigation();

    const onRegisterPressed = () =>{
        navigation.navigate('ConfirmEmail');

    }

    const onSignInPressed= () =>{
        navigate.navigate('SingIn');

    }
    const onTermsOfUsePressed= () =>{
        console.warn("onTermsOfUsePressed");

    }
    const onPrivacyPressed= () =>{
        console.warn("onTermsOfUsePressed");

    }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title} >Create an account</Text>

      <CustomerInut 
      placeholder="Username" 
      value={username} 
      setValue={setUsername}>
     </CustomerInut>

     <CustomerInut 
      placeholder="Email" 
      value={email} 
      setValue={setEmail}>
     </CustomerInut>

      <CustomerInut 
      placeholder="Password"
      value={password} 
      setValue={setPassword} 
      secureTextEntry>
      </CustomerInut>

      <CustomerInut 
      placeholder="Repeat Password"
      value={passwordRepeat} 
      setValue={setPasswordRepeat} 
      secureTextEntry>
      </CustomerInut>

      <CustomerButton 
      onPress={onRegisterPressed}
      text="Register" 
      
      >
      </CustomerButton>
      
      <Text style={styles.text}>
        By registering, you configure that you accept our {' '}
        <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use </Text>and {' '}
        <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
        </Text>

      <SocialSingInButtons></SocialSingInButtons>

      <CustomerButton 
      text="Have an account?Sing In" 
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

export default SignUpScreen;