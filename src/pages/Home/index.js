import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/balance'; 

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name = "Anderson Silva"/>
        <Balance saldo = "12.000,00" despesas = "-8.500,00"/>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
});
