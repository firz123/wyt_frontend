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

  renderBullet(data) {
     return (
       <View style={{flexDirection: 'row'}}>
       <Text>{`\u2022`}</Text>
       <Text>{data}</Text>
       </View>
     );
  }

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
            numberOfLines = {6}>
            </TextInput>
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
              <TouchableOpacity style={styles.postButton}>
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

export default connect(mapStateToProps)(HomeScreen);
