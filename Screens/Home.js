import React from 'react';
import {StyleSheet, Text, View,  StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import { useState } from 'react';

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

export default function Home({navigation}) {

  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[0]);

  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if (transition === TRANSITIONS.length) {
      setStatusBarTransition(TRANSITIONS[0]);
    } else {
      setStatusBarTransition(TRANSITIONS[transition]);
    }
  };

  return (
    
    <LinearGradient
      colors={['#0D324D', '#7F5A83']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor='#0D324D'
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden} />
      <View style={styles.heading}>
          <Text style={styles.Title}>QuizVerse</Text>
          <Text style={styles.Tagline}>Unlocking knowledge at the speed of thought</Text>
        </View>

        <View style={styles.bannerContainer}>
          <LottieView
            source={require('../assets/91736-exams.json')}
            style={styles.animation}
            autoPlay
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Rules');
          }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>START</Text>
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "10%",
    paddingVertical: "10%",
    paddingBottom: "5%",
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Tagline:{
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    marginTop:'2%',
    textAlign:'center',
    fontFamily: 'roboto',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  Title: {
    fontSize: 36,
    fontWeight: '900',
    color: '#2ba4fc',
    fontFamily: 'serif',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  banner: {
    height: '100%',
    width: '100%',
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection:'row',
  },
  button: {
    margin: '10%',
    width: '100%',
    backgroundColor: '#2e5cb890',
    padding: '2%',
    marginVertical: '15%',
    paddingHorizontal: '25%',
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: '10%',
  },

  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  animation: {
    width: '110%',
    height: '110%',
  },
});
