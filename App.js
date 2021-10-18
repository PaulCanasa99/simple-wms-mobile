import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { FetchFonts } from './src/utils/Fonts';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {

  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded)
    return <AppLoading
      startAsync={FetchFonts}
      onFinish={() => setDataLoaded(true)}
      onError={() => console.error(err)} />

  return (
      <RootNavigator />
  );
}

export default App;