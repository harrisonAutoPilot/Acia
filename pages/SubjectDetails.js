// Aboutscreen.js
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions,BackHandler } from 'react-native';
import Pdf from 'react-native-pdf';

export default class SubjectDetails extends Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      filepath: this.props.filepath,
    }
  }
  
  

componentWillMount() {
   BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
}

componentWillUnmount() {
   BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}

handleBackButtonClick() {
   this.props.navigation.goBack(null);
  //  BackHandler.goBack();
   return true;
}

  componentDidMount() {
    this.props.navigation.setOptions({
      title: this.props.route.params.subjectname,
    })
  }

  render() {
    const { route } = this.props;
    const { filepath } = route.params;

    const source = {uri: filepath, cache: true};

    return (
      <View style={styles.container}>
        <Pdf source={source} style={styles.pdf}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      height:"100%",
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 25,
  },
  pdf: {
      flex:1,
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height,
  }
});