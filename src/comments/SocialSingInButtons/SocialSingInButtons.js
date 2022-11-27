import { View, Text } from 'react-native'
import React from 'react'
import CustomerButton from '../CustomerButton/CustomerButton';
const SocialSingInButtons = () => {
    const onSignInFacebook= () =>{
        console.warn("onSignInFacebook");

    }

    const onSignInGoogle= () =>{
        console.warn("onSignInGoogle");

    }

    const onSignInApple= () =>{
        console.warn("onSignInApple");

    };
  return (
    <>

      <CustomerButton 
      onPress={onSignInFacebook}
      text="Sign In with Facebook" 
      bgColor="#E7EAF4"
      fgColor="#4765A9">
      </CustomerButton>

      <CustomerButton 
      text="Sign In with Google" 
      onPress={onSignInGoogle}
      bgColor="#F9EA9EA"
      fgColor="#DD4D44">
      </CustomerButton>
      <CustomerButton 
      text="Sign In with Apple" 
      onPress={onSignInApple}
      bgColor="#e3e3e3"
      fgColor="#363636">
      </CustomerButton>
    </>
  )
}

export default SocialSingInButtons