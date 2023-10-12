import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Modal, TouchableOpacity} from 'react-native';

const ErrorrPopUp = () => {
  return (
    <Modal>
      <View style={styles.view}>
        <Text>Image Search</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
});

export {ErrorrPopUp};
