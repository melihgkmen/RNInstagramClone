import React from 'react'
import { 
    View, 
    TextInput, 
    Dimensions, 
    Text, 
    StyleSheet 
} from 'react-native'

const Input = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{props.textInputHeader}</Text>
            <TextInput style={styles.textInputStyle}
                placeholder={props.textInputPlaceHolder}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                secureTextEntry={props.password || false}
                onChangeText={props.changeOnText}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 60,
        width: Dimensions.get('window').width / 1.1,
        backgroundColor: '#757aa5',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 20,
        marginVertical: 10,
        shadowRadius:50,
        shadowColor:'white'
    },
    header: {
        flex: 1,
        textAlignVertical: 'bottom',
        fontSize: 16,
        marginHorizontal: 10,
        color: "white",
    },
    textInputStyle: {
        flex: 1,
        fontWeight: 'bold',
        marginHorizontal: 10,
        fontSize: 18,
        color: "white",
    }
});

export { Input }