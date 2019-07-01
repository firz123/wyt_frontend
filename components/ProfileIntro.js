import React from 'react';
import { View,
         StyleSheet,
         Image,
         TouchableHighlight,
       } from 'react-native';
import { Text } from 'react-native';

export class ProfileIntro extends React.Component {
  render() {
    return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
      {
        this.props.img ?
        <Image source={{uri: this.props.uri}}
        style={styles.profileImage}/> : <View></View>
      }
      <Text style={styles.usernameStyle}>{this.props.username}</Text>
      <Text style={styles.tagStyle}>{'@' + this.props.tag}</Text>
      <Text style={styles.bioStyle}>{this.props.bio}</Text>
      </View>
    </View> );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderBottomColor: "#ccced1",
    borderBottomWidth: 1,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius:75,
    resizeMode: 'contain',
    borderColor: "#ccced1",
    borderWidth: 1,
  },
  usernameStyle: {
    fontSize: 25,
    marginTop: 5,
  },
  tagStyle: {
    color: "#999",
    fontSize: 15,
    margin: 2,
  },
  bioStyle: {
    textAlign: 'left',
    margin: 2,
  },
});
