import React,{useState} from 'react';
import { View, Text ,Image,StyleSheet,useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomerInut from '../../comments/CustomerInput/CustomerInput';
import CustomerButton from '../../comments/CustomerButton/CustomerButton';
import SocialSingInButtons from '../../comments/SocialSingInButtons';
import { useNavigation } from '@react-navigation/native'; 

const SignInScreen = () => {
    const [username,setUsername]=useState('');

    const [password,setPassword]=useState('');

    const [USERNAME,setUSERNAME]=useState('admin');

    const [PASSWORD,setPASSWORD]=useState('123');


    const { height} =useWindowDimensions();
    const navigation=useNavigation();

    
function onSingInPressed(){
    if(username==USERNAME && password==PASSWORD){
        alert("Giriş Başarılı");
        navigation.navigate('Home');
    }else{
        alert("Hata var");
    }

    }
    const onForgotPasswordPressed= () =>{ 
        navigation.navigate('NewPassword');

    }


    const onSignUpPressed= () =>{
        
        navigate.navigate('SingUp');
    }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Image source={Logo} 
      style={[styles.logo,{ height:height*0.3}]} 
      resizeMode="contain"></Image>

      <CustomerInut
      placeholder="Username" 
      value={username} 
      setValue={setUsername}
      >
     </CustomerInut>

      <CustomerInut
       
      placeholder="Password"
      value={password} 
      setValue={setPassword} 
      secureTextEntry={true}>
      </CustomerInut>

      <CustomerButton 
      onPress={onSingInPressed}
      text="Sign In" 
      
      >
      </CustomerButton>
      

      <CustomerButton 
      onPress={onForgotPasswordPressed}
      text="Forgot Password?"   
      type="TARTIARY">
      </CustomerButton>

      <SocialSingInButtons></SocialSingInButtons>

      <CustomerButton 
      text="Don't have an ?Create one" 
      onPress={onSignUpPressed}
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
    logo: {
        width:'70%',
        maxWidth:300,
        maxHeight:200,
        
    },
});

export default SignInScreen;