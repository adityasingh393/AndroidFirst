/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { SafeAreaView, View } from 'react-native';

// import ImageContainer from './src/components/ImageConatiner';
// // import Description from './src/components/Description';
// import AddCartButton from './src/components/AddCartButton';
// import Addons from './src/components/Addons';
import Screens from './src/Screens/Screens';

function App(): React.JSX.Element {
  return (
    <SafeAreaView >
      <Screens />
    </SafeAreaView>
  );
}


export default App;
