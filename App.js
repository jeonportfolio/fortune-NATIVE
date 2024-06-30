import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import LottieView from 'lottie-react-native';
import { useFonts } from 'expo-font';

import { useTranslation } from './src/use-translation';
import Button from './src/Button';
import { useCookie } from './src/use-cookie';
import { useEffect, useState } from 'react';
import LoadingView from './src/LoadingView';


SplashScreen.preventAutoHideAsync();//splash screen을 임의로 지우는 것을 막는다 

export default function App() {
  const { t, locale, setLocale, format} = useTranslation();
  const { cookieKey } = useCookie();
  const [fontsLoaded] = useFonts({
    'RIDIBatang': require('./assets/fonts/RIDIBatang.otf'),
  });

  const [isLoaded, setIsLoded] = useState(false);

  const y = new Date().getFullYear();
  const m = new Date().getMonth() + 1; //  month는 리턴 값이 0~11이기 때문에 +1을 해준다. 
  const d = new Date().getDay();
  const todayText = format( t('today_is'), y, m, d );

  const locales = [
        "ko",
        "en",
        "ja",
        "zh"
  ]

  useEffect (() => {
  if (cookieKey !== "" ) {
      setIsLoded(true);
  }
   
  },[ cookieKey])

  useEffect( () => {
      if(locale !== null && fontsLoaded) {
          SplashScreen.hideAsync();
      }
    
 }, [locale, fontsLoaded])

  if (!isLoaded) return  <LoadingView/>

  return (
    <View style={styles.container}>
      <LottieView
          autoPlay= {true}
          source={require('./assets/background.json')}
          resizeMode="cover"
          style= {{
              position: "absolute",
              zIndex:-1,
              width:500,
              height: 700
          }}
      />

      <SafeAreaView style= {{flex: 1}}>
          <View style= {styles.topContainer}>
                <Text style = {styles.todayText}>{todayText}</Text>
                <Text  style = {styles.cookieText}>{t(cookieKey)}</Text>
          </View>

          <View style= {styles.bottomContainer}>
          <View style={styles.buttonsContainer}>
                {locales.map(item => (
                    <Button
                        key={item}
                        onPress = {() => setLocale(item)}
                        isSelected= {locale === item}
                        text={item.toUpperCase()}
                    />
                ))}
               
            </View>
          </View>
            

           

      </SafeAreaView>
     

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  todayText: {
    fontFamily: "RIDIBatang",
    position: "absolute",
    top: 70,
    fontSize: 13,
    color: "#8b658f",
  },
  cookieText: {
    fontFamily: "RIDIBatang",
    fontSize: 22,
    color: "#372538",
    textAlign: "center",
    marginHorizontal: 30,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 25,
  },
});
