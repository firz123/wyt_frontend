import React from 'react';
import { View,
         StyleSheet,
         Image,
         TouchableHighlight,
       } from 'react-native';
import { Text } from 'react-native';

/**
 * These are the vote buttons on the QuestionPost with emojis.
 */
class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: false}
  }

  /**
  * When the button is pressed, the vote option and whether the count should be
  * increased or decreased is sent to the QuestionPost related to this button
  */
  toggleButton = () => {
    this.props.toggleCallback(this.props.option, this.state.selected ? -1 : 1);
    this.setState((state, props) => {
      return {
        selected: !state.selected,
      }
    });
  }

  render() {
    return (
      <TouchableHighlight
        style={this.state.selected ? styles.emojiContainerHighlighted : styles.emojiContainer}
        onPress={this.toggleButton}
        underlayColor={'#de6df2'}>
      <View>
        <Text style={this.state.selected ? styles.emojiOptionHighlighted : styles.emojiOption}>
          {`${this.props.quantity} ${this.props.option}`}
        </Text>
      </View>
      </TouchableHighlight>);
  }
}


/**
* The component containing a poll and the voting options,
* allowing the user to vote on it.
*/
export class QuestionPost extends React.Component {

  /**
  * When a vote button is pressed, it calls this callback which calls the final
  * callback on the Explore Screen, passing in the pollID, content, voteOption, and
  * increment/decrement amount
  */
  voted = (option, inc_dec) => {
    this.props.voteCallback(this.props.pollID, this.props.content, option, inc_dec)
  }

  makeVoteOption(optionArr, quantityArr) {
    const voteEmojis = optionArr.map((option, index) =>
        <ToggleButton
            key={index}
            option={option}
            quantity={quantityArr[index]}
            toggleCallback={this.voted}
            />
    )
    return (
      <View style={styles.votingOptions}>
           {voteEmojis}
      </View>
    );
  }

  render() {
    return (
    <View style={styles.mainContainer}>
      <View style={styles.profImgContainer}>
        <Image
          source={{uri: this.props.profileImg}}
          style={styles.profileImage}
        />
        <View style={styles.usernameTagContainer}>
          <Text>{this.props.username}</Text>
          <Text style={styles.tagStyle}>{`@${this.props.tag}`}</Text>
        </View>
      </View>
      <View style={styles.subContainer}>
        <Text>{this.props.content}</Text>
        {
          this.props.img ?
          <Image source={{uri: this.props.uri}}
          style={styles.postImage}/> : <View></View>
        }
        {this.makeVoteOption(this.props.votingOpts, this.props.votingResults)}
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
  profImgContainer: {
    alignItems: 'flex-start',
    marginTop: 5,
    marginBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    marginRight: 5,
  },
  usernameTagContainer: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginTop: 5,
    marginLeft: 5,
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
    color: '#de6df2',
    textAlign: 'center',
  },
  emojiOptionHighlighted: {
    color: '#fff',
    textAlign: 'center',
  },
  emojiContainer: {
    height: 30,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    marginRight: 5,
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: '#ccced1',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  emojiContainerHighlighted: {
    height: 30,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    marginRight: 5,
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: '#de6df2',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#de6df2',
  },
  tagStyle: {
    color: "#999",
    fontSize: 12,
    margin: 2,
  },
});
