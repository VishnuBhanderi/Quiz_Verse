import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
// import {BannerAdSize, BannerAd, TestIds} from 'react-native-google-mobile-ads';

// const BannerAdUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-7528260341883951/2957034278';

export default function Result({navigation, route}) {
  const {score} = route.params;

  return (
    <LinearGradient
      colors={['#0D324D', '#7F5A83']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      {/* <View style={{position: 'absolute', bottom: 0, alignSelf: 'center'}}>
        <BannerAd
          size={BannerAdSize.BANNER}
          unitId={BannerAdUnitId}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </View> */}
      <View style={styles.container}>
        <Text style={styles.title}>Result</Text>

        <Text style={styles.score}> Your Score is : "{score}"</Text>
        <View style={styles.bannerContainer}>
          {score >= 40 && (
            <LottieView
              source={require('../assets/82536-trophy.json')}
              style={styles.animation}
              autoPlay
            />
          )}
          {score < 40 && (
            <LottieView
              source={require('../assets/lf20_ng05lm2w.json')}
              style={styles.animation}
              autoPlay
            />
          )}
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Go to Home</Text>
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '10%',
    paddingVertical: '10%',
    paddingBottom: '5%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  animation: {
    width: '10%',
    height: '100%',
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    color: '#2ba4fc',
    fontFamily: 'serif',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
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
    fontSize: 28,
    fontWeight: '600',
    color: 'white',
  },
  score: {
    fontSize: 24,
    color: 'white',
    fontWeight: '600',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
