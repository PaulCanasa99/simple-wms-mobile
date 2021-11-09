import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { FetchFonts } from './src/utils/Fonts';
import RootNavigator from './src/navigation/RootNavigator';
import moment from 'moment';
import 'moment/locale/es';

const App = () => {
  moment.locale('es')
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