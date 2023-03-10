import theme from './src/theme';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';
import { Routes } from './src/routes';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        style="light"
        translucent
        backgroundColor="transparent"
      />
      {fontsLoaded ?
        <Routes /> : <Loading />
      }

    </ThemeProvider>
  );
}

