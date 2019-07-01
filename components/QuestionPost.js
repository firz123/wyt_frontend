import React from 'react';
import { View,
         StyleSheet,
         Image,
         TouchableHighlight,
       } from 'react-native';
import { Text } from 'react-native';

export class QuestionPost extends React.Component {
  makeVoteOption(optionArr) {
    items = []
    for (var i = 0; i < optionArr.length; i++) {
      items.push(<TouchableHighlight key={i}>
                    <Text style={styles.emojiOption}>{`${optionArr[i]}`}</Text>
                 </TouchableHighlight>)
    }
    return items;
  }
  render() {
    return (
    <View style={styles.mainContainer}>
      <View style={styles.imageTagContainer}>
        <Image
          source={require('../assets/images/robot-dev.png') }
          style={styles.profileImage}
        />
        <Text>{this.props.username}</Text>
      </View>
      <View style={styles.subContainer}>
        <Text>{this.props.content}</Text>
        {
          this.props.img ?
          <Image source={{uri: this.props.uri}}
          style={styles.postImage}/> : <View></View>
        }
        <View style={styles.votingOptions}>
             {this.makeVoteOption(this.props.votingOpts)}
        </View>
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
  subContainer: {
    marginLeft: 30,
  },
  imageTagContainer: {
    alignItems: 'flex-start',
    marginTop: 10,
    marginBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius:15,
    resizeMode: 'contain',
    marginTop: 3,
  },
  postImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    borderWidth: 1,
    borderColor: '#ccced1',
    margin: 10,
  },
  votingOptions: {
    height: 50,
    paddingTop: 10,
    flexDirection: 'row',
  },
  emojiOption: {
    height: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    marginRight: 5,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ccced1',
    borderRadius: 12,
  },
});
