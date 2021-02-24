import React from 'react'
import { 
    View, 
    StyleSheet, 
    Dimensions, 
    Text ,
    Image
} from 'react-native'
import Video from 'react-native-video';

const VideoC = (props) => {
    return (
        <View style={styles.parentContainer}>
            <View style={props.styleHomePage ? styles.containerHomePage : styles.containerGridViewPage}>
                <Video source={{ uri: props.uri }}
                    resizeMode="cover"
                    style={props.styleHomePage ? styles.homePageVideo : styles.gridPageVideo}/>
            </View>
        </View>
    )
}
/* 
<View>
            <View style={{ height: 60, backgroundColor: 'white', flexDirection: 'row' }}>
              <Image
                style={{ width: 36, height: 36, margin: 12, borderRadius: 18, borderWidth: StyleSheet.hairlineWidth, borderColor: 'lightgray' }}
                source={{ uri: item.avatarUrl }}
              />
              <Text style={{ fontWeight: 'bold', height: 60, lineHeight: 60, flex: 1 }}>{item.username}</Text>
              <Ionicons name="ios-more" size={30} color="black" style={{ lineHeight: 60, marginRight: 15 }} />
            </View>
                <View style={{ height: 54, backgroundColor: 'white', flexDirection: 'row' }}>
                   <Image name="ios-heart-outline" size={34} color="white" style={{ marginTop: 12, marginLeft: 15 }} />
                   <Image name="ios-text-outline" size={34} color="white" style={{ marginTop: 12, marginLeft: 20 }} />
                  <Image name="ios-send-outline" size={34} color="white" style={{ marginTop: 12, marginLeft: 20 }} />
                  <View style={{ flex: 1 }} />
                 <Image name="ios-bookmark-outline" size={34} color="white" style={{ marginTop: 12, marginRight: 15 }} />
                 </View>
            
            <View style={{ marginBottom: 20, paddingLeft: 15 }}>
              <Text style={{ fontSize: 12, color: 'gray' }}>{'X MINUTES AGO'}</Text>
            </View>
          </View>
 */


const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#32354e',
        marginTop:50
    },
    containerHomePage: {
        width: Dimensions.get('window').width / 1,
        height: Dimensions.get('window').height * 0.7,
        overflow: 'hidden',
    },
    headerContainerHomePage: {
        height: 40,
        width: Dimensions.get('window').width / 1,
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 18,
        marginLeft: 20,
        fontWeight: 'bold',
    },
    homePageVideo: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        marginTop:50
    },
    containerGridViewPage: {
        width: Dimensions.get('window').width / 2.2, 
        height: Dimensions.get('window').height / 2.9
    },
    gridPageVideo: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }
});

export { VideoC }