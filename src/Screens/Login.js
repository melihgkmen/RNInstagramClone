import React, { useState } from 'react'
import { 
    SafeAreaView, 
    View, 
    Keyboard, 
    TouchableWithoutFeedback, 
    KeyboardAvoidingView, 
    Alert, 
    StyleSheet,
    Image
} from 'react-native'
import { Input, LoginButton } from '../Components'
import { CommonActions } from '@react-navigation/native'
import * as Keychain from 'react-native-keychain'
import { ScrollView } from 'react-native-gesture-handler'
const logoImg = require("../Assets/Icons/instagram-logo.png");

const Login = (props) => {
    const [fullName, setName] = useState("")
    const [Password, setPass] = useState("")
    const storeNamePass = async () => {
        await Keychain.setGenericPassword(fullName, Password)
    }
    function login() {
        storeNamePass()
        if (fullName && Password !== "") {
            props.navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{name: 'Home'} ],}) )
        } else {
            Alert.alert("This field cannot be blank.")
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={styles.keyboardeAvoidingStyle}
        >
            <SafeAreaView style={{ flex: 1 , backgroundColor:'#32354e'}}>
                <ScrollView>
                <Image source={logoImg} style={styles.logoImgStyle} resizeMode="contain" />
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container} >
                        <Input 
                        textInputHeader="Name" 
                        changeOnText={fullName => setName(fullName)}/>
                        <Input 
                        textInputHeader="Password" 
                        password 
                        changeOnText={Password => setPass(Password)}/>
                        <LoginButton buttonText="Login" pressed={login}/>
                    </View>
                </TouchableWithoutFeedback>
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    keyboardeAvoidingStyle: {
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#32354e'
    },
    logoImgStyle: {
        flex: 1,
        marginTop: 90,
        marginBottom: 30,
        marginLeft:110,
        height:170,
        width:200
      },
});

export { Login }