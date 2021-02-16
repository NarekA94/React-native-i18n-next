import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';
import i18n from './i18n';
const initI18n = i18n;

function HomeScreen({navigation}) {
  const {t, i18n} = useTranslation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Second')}>
        <Text>Go</Text>
      </TouchableOpacity>
      <Text>{t('home')}</Text>
    </View>
  );
}

function SecondScreen({navigation}) {
  const {t, i18n} = useTranslation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <TouchableOpacity onPress={() => i18n.changeLanguage("en")}>
        <Text>En</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => i18n.changeLanguage("es")}>
        <Text>Es</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => i18n.changeLanguage("de")}>
        <Text>De</Text>
      </TouchableOpacity>
      <Text>{t('second')}</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
