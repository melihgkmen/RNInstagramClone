import React from 'react'
import { 
    View, 
    FlatList, 
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
    Dimensions,
    KeyboardAvoidingView
 } from 'react-native'
import { VideoC, ImageS } from '../Components'
import { dataList } from '../Config/dataList.js'

const Search = (props) => {

    return (
        <SafeAreaView style={{ flex: 1 , backgroundColor:'#32354e'}}>
               <View style={
                    styles.searchContainer
                }>
                    <Image
                        style={styles.image}
                        resizeMode='contain'
                        source={require('../Assets/Icons/search-icon.png')}
                    />
                    <KeyboardAvoidingView>
                    <TextInput style={
                        styles.textInput
                    }
                        placeholder="Search"
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        onFocus={props.onFocus}
                    />
                    </KeyboardAvoidingView>
                </View>
        <View style={{marginTop:30}}>
            <FlatList
                data={dataList}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                renderItem={({ item }) => (
                    item.id == 0 ? 
                    <VideoC uri={item.url} /> :
                     <ImageS data={item.url} />
                  )}
                  keyExtractor={(item, index) => index.toString()}
            />
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
     image: {
         marginLeft: -190,
         height:80,
         width:50,
         marginRight:25
     },
     textInput: {
         flex: 1,
         fontWeight: 'bold',
         marginHorizontal: 10,
         fontSize: 16
     },
     searchContainer: {
        width: Dimensions.get('window').width / 1,
        backgroundColor: '#757aa5',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
 });

export { Search }