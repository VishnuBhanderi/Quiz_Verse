import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Title from '../Components/Title';
import LottieView from 'lottie-react-native';
import { useInterstitialAd, TestIds } from 'react-native-google-mobile-ads';

export default function Home({navigation}) {
  const { isLoaded, isClosed, load, show } = useInterstitialAd(TestIds.Interstitial, {
    requestNonPersonalizedAdsOnly: true,
  });

  useEffect(() => {
    // Start loading the interstitial straight away
    load();
  }, [load]);

  useEffect(() => {
    if (isClosed) {
      console.log('Closed');
      // Action after the ad is closed
      navigation.navigate('Rules');
    }
  }, [isClosed, navigation]);
  
  return (
    <LinearGradient
      colors={['#0D324D', '#7F5A83']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <View style={styles.container}>
        <Text>
          <Title style={styles.title} />
        </Text>

        <View style={styles.bannerContainer}>
          <LottieView
            source={require('../assets/91736-exams.json')}
            style={styles.animation}
            autoPlay
          />
        </View>

        <TouchableOpacity onPress={() => {
          if (isLoaded) {
            show();
          } else {
            // No advert ready to show yet
            console.log('Not Loaded');
            navigation.navigate('Rules');
          }
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
    paddingTop: 40,
    paddingVertical: 12,
    paddingBottom : 12,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  start: {
    paddingHorizontal: 16,
  },
  banner: {
    height: 400,
    width: 400,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  button: {
    margin: 1,
    width: 350,
    backgroundColor: '#2e5cb890',
    padding: 10,
    marginVertical: 30,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },

  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  animation: {
    width: 500,
    height: 500,
  },
});
