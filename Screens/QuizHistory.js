import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useState} from 'react';
import {useEffect} from 'react';
import {COLORS, SIZES} from '../assets/constants';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  BannerAdSize,
  BannerAd,
  TestIds,
  RewardedAd,
  RewardedAdEventType,
  useRewardedAd,
} from 'react-native-google-mobile-ads';
import {ScrollView} from 'react-native-gesture-handler';

const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-7528260341883951/4004175025';
const BannerAdUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-7528260341883951/6157912684';
const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export default function Quiz({navigation}) {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isOptionDisabled, setIsOptionDisabled] = useState(false);
  const [isRewarded, setIsRewarded] = useState(false);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);

  const getQuiz = async () => {
    setIsLoading(true);
    const url =
      'https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]));
    setIsLoading(false);
  };
  useEffect(() => {
    getQuiz();
  }, []);

  const generateOptionsAndShuffle = _question => {
    const options = [..._question.incorrect_answers];
    options.push(_question.correct_answer);
    shuffleArray(options);
    return options;
  };
  const validateAnswer = selectedOption => {
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(questions[ques].correct_answer);
    setIsOptionDisabled(true);
    if (selectedOption == questions[ques].correct_answer) {
      //set Score
      setScore(score + 10);
    }
    // Show next Button
    if (ques === 9) {
      setShowNextButton(false);
    } else {
      setShowNextButton(true);
    }
  };
  const handleNext = () => {
    setQues(ques + 1);
    setOptions(generateOptionsAndShuffle(questions[ques + 1]));
    setShowNextButton(false);
    setIsOptionDisabled(false);
    setIsRewarded(false);
  };

  const handleShowResult = () => {
    navigation.navigate('Result', {score: score});
  };

  const {isLoaded, isClosed, load, show} = useRewardedAd(adUnitId, {
     
  });
  useEffect(() => {
    load();
  }, [load]);
  useEffect(() => {
    if (isClosed) {
      setIsRewarded(true);
      setScore(score + 10);
      console.log('User earned reward of ');
      load();
    }
  }, [isClosed, load]);

  // // Start loading the rewarded ad straight away
  // load();

  // Unsubscribe from events on unmount

  const onPress = async () => {
    if (isLoaded) {
      return show();
    } else {
      return null;
    }
  };

  // No advert ready to show yet

  return (
    <>
      <LinearGradient
        colors={['#0D324D', '#7F5A83']}
        style={styles.container}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <View style={{position: 'absolute', bottom: 0, alignSelf: 'center'}}>
          <BannerAd
            size={BannerAdSize.BANNER}
            unitId={BannerAdUnitId}
             
          />
        </View>
        <View style={styles.container}>
          {isLoading ? (
            <View style={styles.Loading}>
              <LottieView
                source={require('../assets/9764-loader.json')}
                style={styles.animation}
                autoPlay
              />
            </View>
          ) : (
            questions && (
              <View style={styles.parent}>
                <ScrollView>
                  {!showNextButton ? (
                    <View>
                      <TouchableOpacity style={styles.hint} onPress={onPress}>
                        <View
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: 30 / 2,
                            backgroundColor: COLORS.success1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                          }}>
                          <MaterialCommunityIcons
                            name="key"
                            style={{
                              color: COLORS.white,
                              fontSize: 20,
                            }}
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                  ) : null}
                  <View
                    style={{
                      backgroundColor:
                        score < 40
                          ? COLORS.error1
                          : score >= 40
                          ? COLORS.success1
                          : COLORS.secondary + '40',
                      width: '30%',
                      marginBottom: '2%',
                      alignSelf: 'center',
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor:
                        score < 40
                          ? COLORS.error
                          : score >= 40
                          ? COLORS.success
                          : COLORS.secondary + '40',
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        padding: '2%',
                        alignSelf: 'center',
                        color:
                          score < 40
                            ? COLORS.error
                            : score >= 40
                            ? COLORS.success
                            : COLORS.secondary + '40',
                      }}>
                      Score : {decodeURIComponent(score)}
                    </Text>
                  </View>
                  <View style={styles.questionbox}>
                    <View style={styles.Que}>
                      <Text style={styles.Quet}>
                        Question - {decodeURIComponent(ques + 1)}
                      </Text>
                    </View>
                    <View style={styles.top}>
                      <Text style={styles.question}>
                        {decodeURIComponent(questions[ques].question)}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.options}>
                    <TouchableOpacity
                      onPress={() => validateAnswer(options[0])}
                      disabled={isOptionDisabled}
                      style={{
                        paddingVertical: '2%',
                        paddingHorizontal: 20,
                        borderRadius: 20,
                        borderWidth: 3,
                        marginVertical: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        // height: 60,
                        borderColor:
                          options[0] == correctOption
                            ? COLORS.success
                            : options[0] == currentOptionSelected &&
                              isRewarded == false
                            ? COLORS.error
                            : COLORS.secondary + '40',
                        marginVertical: 6,
                        backgroundColor:
                          options[0] == correctOption
                            ? COLORS.success1
                            : options[0] == currentOptionSelected &&
                              isRewarded == false
                            ? COLORS.error1
                            : COLORS.secondary + '20',
                      }}>
                      <Text style={styles.option}>
                        {decodeURIComponent(options[0])}
                      </Text>
                      {/* Show Check or Cross Icon based on correct answer */}
                      {options[0] == correctOption ? (
                        <View
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: 30 / 2,
                            backgroundColor: COLORS.success,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <MaterialCommunityIcons
                            name="check"
                            style={{
                              color: COLORS.white,
                              fontSize: 20,
                            }}
                          />
                        </View>
                      ) : options[0] == currentOptionSelected &&
                        isRewarded == false ? (
                        <View
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: 30 / 2,
                            backgroundColor: COLORS.error,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <MaterialCommunityIcons
                            name="close"
                            style={{
                              color: COLORS.white,
                              fontSize: 20,
                            }}
                          />
                        </View>
                      ) : null}
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => validateAnswer(options[1])}
                      disabled={isOptionDisabled}
                      style={{
                        paddingVertical: '2%',
                        paddingHorizontal: 20,
                        borderRadius: 20,
                        borderWidth: 3,
                        marginVertical: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        // height: "1%",
                        borderColor:
                          options[1] == correctOption
                            ? COLORS.success
                            : options[1] == currentOptionSelected &&
                              isRewarded == false
                            ? COLORS.error
                            : COLORS.secondary + '40',
                        marginVertical: 6,
                        backgroundColor:
                          options[1] == correctOption
                            ? COLORS.success1
                            : options[1] == currentOptionSelected &&
                              isRewarded == false
                            ? COLORS.error1
                            : COLORS.secondary + '20',
                      }}>
                      <Text style={styles.option}>
                        {decodeURIComponent(options[1])}
                      </Text>
                      {/* Show Check or Cross Icon based on correct answer */}
                      {options[1] == correctOption ? (
                        <View
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: 30 / 2,
                            backgroundColor: COLORS.success,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <MaterialCommunityIcons
                            name="check"
                            style={{
                              color: COLORS.white,
                              fontSize: 20,
                            }}
                          />
                        </View>
                      ) : options[1] == currentOptionSelected &&
                        isRewarded == false ? (
                        <View
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: 30 / 2,
                            backgroundColor: COLORS.error,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <MaterialCommunityIcons
                            name="close"
                            style={{
                              color: COLORS.white,
                              fontSize: 20,
                            }}
                          />
                        </View>
                      ) : null}
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => validateAnswer(options[2])}
                      disabled={isOptionDisabled}
                      style={{
                        paddingVertical: '2%',
                        paddingHorizontal: 20,
                        borderRadius: 20,
                        borderWidth: 3,
                        marginVertical: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        // height: 60,
                        borderColor:
                          options[2] == correctOption
                            ? COLORS.success
                            : options[2] == currentOptionSelected &&
                              isRewarded == false
                            ? COLORS.error
                            : COLORS.secondary + '40',
                        marginVertical: 6,
                        backgroundColor:
                          options[2] == correctOption
                            ? COLORS.success1
                            : options[2] == currentOptionSelected &&
                              isRewarded == false
                            ? COLORS.error1
                            : COLORS.secondary + '20',
                      }}>
                      <Text style={styles.option}>
                        {decodeURIComponent(options[2])}
                      </Text>
                      {/* Show Check or Cross Icon based on correct answer */}
                      {options[2] == correctOption ? (
                        <View
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: 30 / 2,
                            backgroundColor: COLORS.success,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <MaterialCommunityIcons
                            name="check"
                            style={{
                              color: COLORS.white,
                              fontSize: 20,
                            }}
                          />
                        </View>
                      ) : options[2] == currentOptionSelected &&
                        isRewarded == false ? (
                        <View
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: 30 / 2,
                            backgroundColor: COLORS.error,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <MaterialCommunityIcons
                            name="close"
                            style={{
                              color: COLORS.white,
                              fontSize: 20,
                            }}
                          />
                        </View>
                      ) : null}
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => validateAnswer(options[3])}
                      disabled={isOptionDisabled}
                      style={{
                        paddingVertical: '2%',
                        paddingHorizontal: 20,
                        borderRadius: 20,
                        borderWidth: 3,
                        marginVertical: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        // height: 60,
                        borderColor:
                          options[3] == correctOption
                            ? COLORS.success
                            : options[3] == currentOptionSelected &&
                              isRewarded == false
                            ? COLORS.error
                            : COLORS.secondary + '40',
                        marginVertical: 6,
                        backgroundColor:
                          options[3] == correctOption
                            ? COLORS.success1
                            : options[3] == currentOptionSelected &&
                              isRewarded == false
                            ? COLORS.error1
                            : COLORS.secondary + '20',
                      }}>
                      <Text style={styles.option}>
                        {decodeURIComponent(options[3])}
                      </Text>
                      {/* Show Check or Cross Icon based on correct answer */}
                      {options[3] == correctOption ? (
                        <View
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: 30 / 2,
                            backgroundColor: COLORS.success,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <MaterialCommunityIcons
                            name="check"
                            style={{
                              color: COLORS.white,
                              fontSize: 20,
                            }}
                          />
                        </View>
                      ) : options[3] == currentOptionSelected &&
                        isRewarded == false ? (
                        <View
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: 30 / 2,
                            backgroundColor: COLORS.error,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <MaterialCommunityIcons
                            name="close"
                            style={{
                              color: COLORS.white,
                              fontSize: 20,
                            }}
                          />
                        </View>
                      ) : null}
                    </TouchableOpacity>
                  </View>
                </ScrollView>
                <View
                  style={{
                    alignItems: 'center',
                    paddingBottom: 12,
                    marginBottom: 26,
                  }}>
                  {isRewarded && !showNextButton ? (
                    <Text
                      style={{
                        color: COLORS.success,
                      }}>
                      Click any option to get correct answer
                    </Text>
                  ) : null}
                </View>
                <View style={styles.bottom}>
                  {showNextButton ? (
                    <TouchableOpacity
                      style={styles.button}
                      onPress={handleNext}>
                      <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                  ) : ques === 9 ? (
                    <TouchableOpacity
                      style={styles.button}
                      onPress={handleShowResult}>
                      <Text style={styles.buttonText}>SHOW RESULTS</Text>
                    </TouchableOpacity>
                  ) : null}
                </View>
              </View>
            )
          )}
        </View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 16,
    height: '100%',
  },
  hint: {
    backgroundColor: COLORS.success1,
    padding: 5,
    marginBottom: 5,
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginHorizontal: 15,
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  Que: {
    backgroundColor: COLORS.secondary + '20',
    borderRadius: 12,
    width: '90%',
    padding: 5,
    alignItems: 'center',
  },
  questionbox: {
    backgroundColor: '#AEE1F950',
    padding: '2%',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Quet: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'serif',
    color: '#2ba4fc',
  },
  top: {
    marginVertical: 16,
  },
  animation: {
    width: 100,
    height: 100,
  },
  options: {
    marginVertical: 16,
    flex: 4,
  },
  bottom: {
    paddingBottom: 12,
    marginBottom: 26,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Loading: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  LoadingText: {
    color: 'white',
    fontSize: 26,
  },
  button: {
    flex: 1,
    width: '100%',
    backgroundColor: '#2e5cb890',
    padding: '4%',
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },

  buttonText: {
    fontSize: 22,
    fontWeight: '600',
    color: 'white',
  },

  question: {
    fontSize: 24,
    color: COLORS.white,
    fontWeight: '600',
    textAlign: 'auto',
  },

  option: {
    fontSize: 20,
    color: COLORS.white,
  },

  parent: {
    height: '100%',
  },
});
