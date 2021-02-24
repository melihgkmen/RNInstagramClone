import React, { useEffect, useState } from 'react'
import { 
    View, 
    FlatList, 
    ActivityIndicator, 
    StyleSheet ,
    SafeAreaView,
    Text,
    StatusBar,
    Dimensions,
    Image,
    TextInput
} from 'react-native'
import { VideoC, ImageS } from '../Components'
import { CommonActions } from '@react-navigation/native'
import * as Keychain from 'react-native-keychain'
import { dataList } from '../Config/dataList.js'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
//import NavigationService from './NavigationService';


const Home = (props) => {
    const [credentials, setCredentials] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getName()}, [])

    const getName = async () => {
        let credentials = await Keychain.getGenericPassword();
        setCredentials(credentials)
        setLoading(false)
    }

    function searchNavigate() {
        props.navigation.dispatch(
            CommonActions.navigate({
                name: 'Search',
            })
        )
    }

    return (
        loading ? 
          <View style={styles.loading}>
          <ActivityIndicator size="large" color="gray"/>
          <Text>Loading...</Text>
          <StatusBar barStyle="default"/>
        </View>
            :
            <SafeAreaView style={{ flex: 1 , backgroundColor:'#32354e'}}>
            <ScrollView>
            <View style={styles.container}>
                        <View style={
                    styles.searchContainer
                }>
                    <TouchableOpacity>
                    <Image
                        style={styles.image}
                        resizeMode='contain'
                        source={require('../Assets/Icons/instagram-logo.png')}
                    />
                    </TouchableOpacity>
                    <TextInput style={
                        styles.textInput
                    }
                        placeholder={props.textInputPlaceHolder}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        onFocus={props.onFocus}
                        textInputPlaceHolder=" Search" 
                        onFocus={searchNavigate}
                    />
                    <TouchableOpacity onPress={searchNavigate}>
                    <Image
                        style={styles.image}
                        resizeMode='contain'
                        source={require('../Assets/Icons/search-icon.png')}
                    />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={dataList}
                    showsVerticalScrollIndicator={false}
                    removeClippedSubviews={true}
                    windowSize={1}
                    renderItem={({ item }) => (
                        item.id == 0 ? 
                        <VideoC styleHomePage uri={item.url}/> :
                        <ImageS styleHomePage data={item.url}/>
                      )}
                      keyExtractor={(item, index) => index.toString()}
                    />
            </View>
            </ScrollView>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
   container: {
        flex: 1,
        backgroundColor: '#32354e'
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
      },
      searchContainer: {
        width: Dimensions.get('window').width / 1,
        backgroundColor: '#757aa5',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },
    image: {
        marginLeft: 35,
        height:80,
        width:50,
        marginRight:25
    },
    textInput: {
        flex: 1,
        fontWeight: 'bold',
        marginHorizontal: 10,
        fontSize: 16
    }
});


export { Home }