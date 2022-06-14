import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Title from '../Components/Title';
import LottieView from 'lottie-react-native';

export default function Home({navigation}) {
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
  banner: {
    height: '100%',
    width: '100%',
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
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
