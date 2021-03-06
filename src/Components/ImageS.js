import React from 'react'
import { 
    View, 
    Image, 
    Dimensions, 
    Text, 
    StyleSheet 
} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

const ImageS = (props) => {

    return (
        <View style={props.styleHomePage ? styles.containerHome : styles.containerGrid}>
           
            <View style={props.styleHomePage ? null : styles.gridViewFlatlistContainer}>
                <FlatList
                    data={props.data}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={styles.renderContainer}>
                          <Image
                            style={
                                props.styleHomePage ? styles.imageStyleHomePage : styles.imageStyleGridViewPage
                            } source={{ uri: item }} resizeMode='cover'/>
                          </View>
                      )}
                      keyExtractor={(item, index) => index.toString()}
                    />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerHome: {
        flex: 1,
    },
    containerGrid: {
        flex: 1,

    },
    imageStyleHomePage: {
        width: Dimensions.get('window').width / 1,
        aspectRatio: 1
    },
    imageStyleGridViewPage: {
        width: Dimensions.get('window').width / 2.2,
        height: Dimensions.get('window').height / 2.9,
        marginLeft:10
    },
    gridViewFlatlistContainer: {
        width: Dimensions.get('window').width / 2.2, 
        height: Dimensions.get('window').height / 2.4,
        overflow: 'hidden',
        marginVertical: 10
    },
    renderContainer: {
        flex: 1,
        marginTop:60
    },
    homePageHeaderContainer: {
        height: 30,
        width: Dimensions.get('window').width / 1,
        justifyContent: 'center'
    },
    headerTextStyle: {
        fontSize: 18,
        marginLeft: 20,
        fontWeight: 'bold'
    },
    imageStyle: {
        

    },

});
export { ImageS }
