import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/Home';
import QuizGK from '../Screens/QuizGK';
import QuizCA from '../Screens/QuizCA';
import QuizCom from '../Screens/QuizCom';
import QuizGeo from '../Screens/QuizGeo';
import QuizHistory from '../Screens/QuizHistory';
import QuizVG from '../Screens/QuizVG';
import QuizMusic from '../Screens/QuizMusic';
import QuizV from '../Screens/QuizV';
import QuizSN from '../Screens/QuizSN';
import QuizSport from '../Screens/QuizSport';
import QuizMyth from '../Screens/QuizMyth';
import Result from '../Screens/Result';
import Rules from '../Screens/Rules';
import SelectCategory from '../Screens/SelectCategory';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SelectCategory"
        component={SelectCategory}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Rules"
        component={Rules}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QuizGK"
        component={QuizGK}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name="QuizSN"
        component={QuizSN}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QuizCom"
        component={QuizCom}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QuizVG"
        component={QuizVG}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QuizMyth"
        component={QuizMyth}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QuizHistory"
        component={QuizHistory}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QuizMusic"
        component={QuizMusic}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QuizV"
        component={QuizV}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QuizSport"
        component={QuizSport}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QuizGeo"
        component={QuizGeo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QuizCA"
        component={QuizCA}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name="Result"
        component={Result}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
