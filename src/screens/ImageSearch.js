import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {SearchComponent} from '../components';
import {AppContext} from '../utils/constants';

const RenderItem = ({item}) => {
  const {previewURL} = item;

  return (
    <TouchableOpacity>
      <Image source={{uri: previewURL}} style={{height: 100, width: 100}} />
    </TouchableOpacity>
  );
};

const _ListEmptyComponent = ({item}) => {
  return <Text>No Data Avialable</Text>;
};

const ImageSearch = () => {
  const {state, dispatch} = useContext(AppContext);
  const {loading, error, images} = state;

  return (
    <View style={styles.view}>
      <SearchComponent />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          keyExtractor={item => item?.previewURL}
          data={images}
          renderItem={({item}) => <RenderItem item={item} />}
          ListEmptyComponent={_ListEmptyComponent}
          ItemSeparatorComponent={() => (
            <View
              style={{height: 2, width: '100%', backgroundColor: 'transparent'}}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
});

export default ImageSearch;
