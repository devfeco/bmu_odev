import React,{useState} from 'react';
import { View, Text ,StyleSheet, ScrollView} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomerInut from '../../comments/CustomerInput/CustomerInput';
import CustomerButton from '../../comments/CustomerButton/CustomerButton';
import SocialSingInButtons from '../../comments/SocialSingInButtons';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
    const [code,setCode] = useState('');
    const [newpassword,setNewPassword]=useState('');
    const navigate=useNavigation();
    const onSubmitPressed= () =>{
        navigate.navigate('Home');

    };

    const onSignInPressed= () =>{
      navigate.navigate('SingIn');

    };
    

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title} >Reset your password</Text>

      <CustomerInut 
      placeholder="Code" 
      value={code} 
      setValue={setCode}>
     </CustomerInut>

     <CustomerInut 
      placeholder="Enter your new password" 
      value={newpassword} 
      setValue={setNewPassword}>
     </CustomerInut>
     

      <CustomerButton 
      onPress={onSubmitPressed}
      text="Submit">
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

export default NewPasswordScreen;