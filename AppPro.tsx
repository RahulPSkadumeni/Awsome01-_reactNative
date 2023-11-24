// eslint-disable-next-line prettier/prettier
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

function AppPro(): JSX.Element {
  return (
    <>
      <SafeAreaView>
        <View>
          <Text style={{fontSize: 20, color: 'black'}}>Hello World!</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

export default AppPro;
