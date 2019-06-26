import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import { WebBrowser } from 'expo';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
      super();
  }

  renderBullet(data) {
     return (
       <View style={{flexDirection: 'row'}}>
       <Text>{`\u2022`}</Text>
       <Text>{data}</Text>
       </View>
     );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.imageTagContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.profileImage}
            />

            <TouchableHighlight
              style={styles.tagSection}
            ><Text style={styles.submitText}>Post Tags</Text></TouchableHighlight>
          </View>

          <View style={styles.postContainer}>
            <TextInput
            style={styles.postStyle}
            placeholder="What's up for discussion..."
            placeholderTextColor="#bfc4cc"
            multiline={true}
            numberOfLines = {6}>
            </TextInput>
          </View>

          <View style={styles.votingOptions}>
              <Text>voting options go here</Text>
          </View>
          <View style={styles.rightAlign}>
            <View style={styles.postButton}>
                  <Text style={styles.postButtonText}>Post</Text>
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
  rightAlign: {
    alignItems: 'flex-end',
  },
  votingOptions: {
    borderTopColor: '#ccced1',
    borderTopWidth: 1,
    borderBottomColor: '#ccced1',
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 10,
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
});
