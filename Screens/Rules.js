import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BannerAdSize, BannerAd, TestIds} from 'react-native-google-mobile-ads';

export default function Rules({navigation}) {
  return (
    <LinearGradient
      colors={['#0D324D', '#7F5A83']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <View style={{position: 'absolute', top: 0, alignSelf: 'center'}}>
        <BannerAd size={BannerAdSize.BANNER} unitId={TestIds.BANNER} />
      </View>
      <View style={{position: 'absolute', bottom: 0, alignSelf: 'center'}}>
        <BannerAd size={BannerAdSize.BANNER} unitId={TestIds.BANNER} />
      </View>
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

          <Text style={styles.passingMarks}>🏆 Qualification Criteria 🏆</Text>
          <Text></Text>
          <Text style={styles.passingRules}>
            💎 Scoring more than 40 will make you winner.
          </Text>
        </View>

        <Text style={styles.BestofLuck}>Best Of Luck</Text>

        <TouchableOpacity onPress={() => navigation.navigate('SelectCategory')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Let's Start the Quiz</Text>
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
    paddingBottom: 36,
    paddingHorizontal: 12,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  Rules: {
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    alignSelf: 'flex-start',
    // flex: 1,
  },

  titel: {
    fontSize: 36,
    fontWeight: '900',
    color: '#2ba4fc',
    fontFamily: 'serif',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    fontStyle: 'italic',
  },
  BestofLuck: {
    marginVertical: 10,
    fontSize: 40,
    fontFamily: 'serif',
    fontWeight: '600',
    color: 'white',
  },
  Rules: {
    marginVertical: 80,
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
    margin: 1,
    width: 350,
    backgroundColor: '#2e5cb890',
    padding: 10,
    marginVertical: 90,
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
});
