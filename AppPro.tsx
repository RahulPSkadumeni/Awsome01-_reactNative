import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const AppPro = (): React.ReactElement => {
  return (
    <>
      <SafeAreaView>
        <View>
          <Text style={{fontSize: 20, color: 'black'}}>Hello World!</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default AppPro;
