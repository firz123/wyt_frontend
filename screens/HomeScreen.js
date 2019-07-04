import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  TouchableHighlight,
  FlatList,
  Animated,
} from 'react-native';
import { connect } from 'react-redux';
import EmojiSelector, { Categories }  from 'react-native-emoji-selector';
import { addPoll } from '../actions/actions';

/**
* Lets the user make a new post.
* TODO: Users should be able to add an image to their post, add tags,
* change visibility rules.
*/
class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {pickerVisible: false,
                  selectedVoteOpts: [],
                  pollText: ''};
  }

  /**
  * Function used to render bulleted items at the bottom of the screen.
  */
  renderBullet(data) {
     return (
       <View style={{flexDirection: 'row'}}>
       <Text>{`\u2022`}</Text>
       <Text>{data}</Text>
       </View>
     );
  }

  /**
  * Function used to create the voting options (emojis) after they've been
  * selected from the emoji picker. Puts them in a TouchableOpacity so they can
  * be deleted.
  */
  wrapVoteBox(voteOpts) {
    const results = voteOpts.map((emoji) =>
        <TouchableOpacity
            style={styles.emojiOption}
            onPress={this.removeOption(emoji)}
            key={emoji.codePointAt(0)}>
          <Text style={styles.defaultOption}>{emoji}</Text>
        </TouchableOpacity>)
    return results;
  }

  /**
  * Callback used by the emoji picker when an emoji has been selected,
  * adds it to an array in the state.
  */
  emojiSelected = (emoji) => {
    if (this.state.selectedVoteOpts.includes(emoji)) {
      this.setState((state, props) => {
        return {pickerVisible: false}
      });
    } else {
    this.setState((state, props) => {
      return {pickerVisible: false,
              selectedVoteOpts: this.state.selectedVoteOpts.concat(emoji)};
    });
    }
  }

  /**
  * Callback used by the voting option when it's selected, which deletes it
  * from the array in the state, so it gets removed from the menu.
  */
  removeOption = (emoji) => {
    return () => {
      this.setState((state, props) => {
        return {pickerVisible: false,
                selectedVoteOpts: state.selectedVoteOpts.filter(
                  function(value, index, arr){
                    return value != emoji;}),
                };
      });
    }
  }

  /**
  * Callback used by the post button that verifies that the user has selected
  * voting options and has written a post, then dispatches it to the Redux store
  * and refreshes the HomeScreen.
  */
  verifyAndDispatch = () => {
    if (this.state.selectedVoteOpts.length == 0 &&
        this.state.pollText.length == 0) {
          return;
    }
    this.props.addPoll(
      this.props.activity.username,
      this.props.activity.tag,
      this.state.pollText,
      this.state.selectedVoteOpts,
      this.props.activity.uri);
    this.setState({pickerVisible: false,
                  selectedVoteOpts: [],
                  pollText: ''})
  }

  /**
  * When the plus button on the voting menu is selected, the emoji picker should
  * toggle either active or inactive.
  */
  togglePicker = () => {
    this.setState((state, props) => {
      return {pickerVisible: !state.pickerVisible};
    });
  }
  pickerOff = () => {
    this.setState({pickerVisible: false});
  }
  pickerOn = () => {
    this.setState({pickerVisible: true});
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.imageTagContainer}>
            <Image source={{uri: this.props.activity.uri}}
              style={styles.profileImage}
            />

            <TouchableHighlight style={styles.tagSection}>
              <Text style={styles.submitText}>Post Tags</Text>
            </TouchableHighlight>
          </View>

          <View style={styles.postContainer}>
            <TextInput
            style={styles.postStyle}
            placeholder="What's up for discussion..."
            placeholderTextColor="#bfc4cc"
            multiline={true}
            maxLength={300}
            onChangeText={(text) => this.setState({pollText: text})}
            value={this.state.pollText}
            numberOfLines = {6}
            />
            <View style={styles.row}>
              <View style={styles.rightAlign}>
                <Text style={styles.greyText}>{`${300 - this.state.pollText.length} characters left`}</Text>
              </View>
            </View>
          </View>

          <View style={styles.votingOptions}>
          {
            this.state.selectedVoteOpts.length ?
            this.wrapVoteBox(this.state.selectedVoteOpts) :
            null
          }
            <TouchableOpacity style={styles.emojiOption} onPress={this.togglePicker}>
              <Text style={[styles.defaultOption, styles.greyText]}>+</Text>
            </TouchableOpacity>
          </View>
          {
            this.state.pickerVisible ? <EmojiSelector
              showTabs={true}
              showSearchBar={true}
              category={Categories.people}
              onEmojiSelected={ this.emojiSelected
              }
              columns={8}
            /> : null
          }

          <View style={styles.row}>
            <View style={styles.rightAlign}>
              <TouchableOpacity style={styles.postButton}  onPress={this.verifyAndDispatch}>
                  <Text style={styles.postButtonText}>Post</Text>
              </TouchableOpacity>
            </View>
          </View>

          <FlatList
            style={{marginLeft: 20, marginRight: 10}}
            data={[{key: 'All users can comment'},
                   {key: 'All users can view'},
                   {key: 'Users must vote before seeing the voting results'}
                 ]}
            renderItem={({item}) => this.renderBullet(item.key)}
          />

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  leftAlign: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightAlign: {
    flex: 1,
    alignItems: 'flex-end',
    paddingBottom: 5,
  },
  votingOptions: {
    borderTopColor: '#ccced1',
    borderTopWidth: 1,
    borderBottomColor: '#ccced1',
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
  },
  postStyle: {
    height: 220,
    fontSize: 20,
  },
  postContainer: {
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
  },
  postButton: {
    marginTop:1,
    paddingTop:10,
    paddingBottom:10,
    borderRadius:5,
    backgroundColor: '#de6df2',
    width: 100,
    height: 50,
    marginRight: 20,
  },
  postButtonText: {
    color: '#fff',
    fontSize: 20,
    textAlign:'center',
  },
  imageTagContainer: {
    borderTopColor: '#ccced1',
    borderTopWidth: 1,
    alignItems: 'flex-start',
    marginTop: 10,
    marginBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
  },
  tagSection: {
    marginLeft:10,
    marginTop:10,
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:8,
    borderRadius:15,
    borderWidth: 1,
    borderColor: '#de6df2',
    width: 250,
    height: 28,
  },
  submitText:{
      fontSize: 12,
      color:'#de6df2',
      textAlign:'left',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius:15,
    resizeMode: 'contain',
    marginTop: 3,
  },
  emojiOption: {
    height: 30,
    width: 40,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'column',
    marginRight: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccced1',
    borderRadius: 12,
  },
  greyText: {
    color: '#bfc4cc',
  },
  defaultOption: {
    fontSize: 20,
  },
});

const mapStateToProps = (state) => {
  const { activity } = state
  const { polls } = state
  return { activity, polls }
};

const mapDispatchToProps = dispatch => ({
  addPoll: (username, tag, content, votingOpts, profileImg) =>
            dispatch(addPoll(username, tag, content, votingOpts, profileImg))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
