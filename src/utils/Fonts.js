import * as Font from 'expo-font'

export const FetchFonts = async() => {
  await Font.loadAsync({
    'montserrat-bold': require('../../assets/fonts/Montserrat-Bold.otf'),
    'montserrat-medium': require('../../assets/fonts/Montserrat-Medium.otf'),
    'montserrat-semi-bold': require('../../assets/fonts/Montserrat-SemiBold.otf'),
    'montserrat-regular': require('../../assets/fonts/Montserrat-Regular.otf'),
  })
}