import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance'; 
import Movements from '../../components/Movements';

const list = [
    {
        id: 1,
        label: 'Conta de luz',
        value: '255,00',
        date: '05/09/2022',
        type: 0, // despesa
    },
    {
        id: 2,
        label: 'Pix Cliente',
        value: '4.200,00',
        date: '02/09/2022',
        type: 1, // credito
    },{
        id: 3,
        label: 'Fornecedor',
        value: '2.900,00',
        date: '05/09/2022',
        type: 0, // despesa
    },{
        id: 4,
        label: 'Salário',
        value: '10.000,00',
        date: '01/09/2022',
        type: 1, // credito
    },
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name = "Anderson Silva"/>
        <Balance saldo = "12.000,00" despesas = "-8.500,00"/>
        <Text style = {styles.title}>Últimas movimentações</Text>
        <FlatList
            style = {styles.list}
            data = {list}
            keyExtractor = {(item) => String(item.id)}
            renderItem = {({item}) =>  <Movements data = {item}/>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
