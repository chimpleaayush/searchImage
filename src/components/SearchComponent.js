import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {searchImage} from '../utils/networkCall.js';
import {AppContext} from '../utils/constants.js';
import {debounce} from '../utils/helper.js';

const SearchComponent = () => {
  const [value, setValue] = useState('');
  const _onChangeText = text => {
    setValue(text);
  };
  const {state, dispatch} = useContext(AppContext);
  useEffect(() => {
    debounce(searchImage(value, dispatch), 200000);
  }, [value]);
  return (
    <View style={styles.view}>
      <TextInput
        value={value}
        style={styles.textinputStyle}
        onChangeText={_onChangeText}
        placeholder="Search for the Image"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {height: 100, width: '100%'},
  textinputStyle: {borderColor: 'black', borderWidth: 1},
});

export {SearchComponent};
