import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  BannerAdSize,
  BannerAd,
  TestIds,
} from 'react-native-google-mobile-ads';

export default function SelectCategory({navigation}) {
  return (
    <LinearGradient
      colors={['#0D324D', '#7F5A83']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
        <View style={{position: 'absolute', bottom: 0, alignSelf: 'center'}}>
        <BannerAd size={BannerAdSize.BANNER} unitId={'ca-app-pub-7528260341883951/5806558897'} />
      </View>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.Title}>Select Category</Text>
        </View>

        <View style={styles.categories}>
          <TouchableOpacity onPress={() => navigation.navigate('QuizGK')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>General Knowledge</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('QuizSN')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Science & Nature</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('QuizCom')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Computers</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('QuizVG')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Video Games</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('QuizMyth')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Mythology</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('QuizSport')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Sports</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('QuizHistory')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>History</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('QuizMusic')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Music</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('QuizGeo')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Geography</Text>
          </View>
        </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('QuizV')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Vehicles</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('QuizCA')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Cartoon & Animations</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "1%",
    // paddingVertical: "0%",
    paddingBottom: "10%",
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    marginTop:'5%',
    flex: 1,
    // marginBottom:"10%"
  },

  categories: {
    flex:11,
    height:"100%",
    marginTop:"5%",
    justifyContent: 'center',
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
    fontStyle: 'italic',
  },

  button: {

    width: 300,
    backgroundColor: '#7F5A83',
    borderColor: '#d45ee0',
    borderWidth:3,
    padding: "2%",
    paddingHorizontal: "10%",
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 5,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});
