import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BannerAdSize, BannerAd, TestIds} from 'react-native-google-mobile-ads';
import {ScrollView} from 'react-native-gesture-handler';

const adUnitBottom = __DEV__
  ? TestIds.BANNER
  : 'ca-app-pub-7528260341883951/6381273964';
const adUnitTop = __DEV__
  ? TestIds.BANNER
  : 'ca-app-pub-7528260341883951/4876620603';

export default function Rules({navigation}) {
  return (
    <LinearGradient
      colors={['#0D324D', '#7F5A83']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <View style={{position: 'absolute', top: 0, alignSelf: 'center'}}>
        <BannerAd
          unitId={adUnitTop}
          size={BannerAdSize.BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </View>
      <View style={{position: 'absolute', bottom: 0, alignSelf: 'center'}}>
        <BannerAd
          unitId={adUnitBottom}
          size={BannerAdSize.BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titel}>Rules</Text>

          <View style={styles.Rules}>
            <Text style={styles.evaluationScheme}>🏅 Evaluation Scheme 🏅</Text>
            <Text></Text>
            <Text style={styles.evrules}>
              💎 Every correct answer will give you 10 points.
            </Text>

            <Text></Text>
            <Text></Text>

            <Text style={styles.passingMarks}>
              🏆 Qualification Criteria 🏆
            </Text>
            <Text></Text>
            <Text style={styles.passingRules}>
              💎 Scoring more than 40 will make you winner.
            </Text>
          </View>

          <Text style={styles.BestofLuck}>Best Of Luck</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('SelectCategory')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Let's Start the Quiz</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '10%',
    paddingVertical: '10%',
    paddingBottom: '5%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Rules: {
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    alignSelf: 'flex-start',
  },

  titel: {
    fontSize: 36,
    flex: 1,
    fontWeight: '900',
    color: '#2ba4fc',
    fontFamily: 'serif',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    fontStyle: 'italic',
  },
  BestofLuck: {
    flex: 1,
    fontSize: 40,
    fontFamily: 'serif',
    fontWeight: '600',
    color: 'white',
  },
  Rules: {
    flex: 8,
    marginVertical: '15%',
  },
  evaluationScheme: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2ba4fc',
  },
  evrules: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
    textAlign: 'auto',
  },

  passingMarks: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2ba4fc',
  },

  passingRules: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
    textAlign: 'auto',
  },
  button: {
    margin: '10%',
    width: '100%',
    backgroundColor: '#2e5cb890',
    padding: '2%',
    marginVertical: '15%',
    paddingHorizontal: '10%',
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: '1%',
  },

  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
});
