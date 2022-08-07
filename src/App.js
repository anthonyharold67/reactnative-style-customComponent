import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Card from './components/Card';

/* const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viev}>
        <Text>Hello World</Text>
      </View>
      <View style={styles.viev_center}>
        <Text>Hello World</Text>
      </View>
      <View style={styles.viev2}>
        <Text>Merhaba Dünya</Text>
      </View>
    </SafeAreaView>
  );
}; */

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.box_1} />
//       <View style={styles.box_2} />
//       <View style={styles.box_3} />
//       <View style={styles.box_4} />
//     </SafeAreaView>
//   );
// };

/* const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text style={styles.card_title}>Eddard Stark</Text>
          <Text style={styles.card_text}>Winter is coming...</Text>
        </View>
        <TouchableOpacity style={styles.card_button}>
          <Text style={styles.card_button_text}>I LIKED</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text style={styles.card_title}>Anthony Harold</Text>
          <Text style={styles.card_text}>
            When you think it is too late, the truth is, it is still early.
          </Text>
        </View>
        <TouchableOpacity style={styles.card_button}>
          <Text style={styles.card_button_text}>I LIKED</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text style={styles.card_title}>A Thinker</Text>
          <Text style={styles.card_text}>Work smarter, not harder.</Text>
        </View>
        <TouchableOpacity style={styles.card_button}>
          <Text style={styles.card_button_text}>I LIKED</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
 */
//aşağıdaki yatayda hizalama
/* const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viev: {
    flex: 10,
    backgroundColor: 'red',
  },
  viev_center: {
    flex: 3.75,
    backgroundColor: 'bisque',
  },
  viev2: {
    flex: 5.25,
    backgroundColor: 'blue',
  },
}); */
/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    //yatay olarak dizilir
  },
  viev: {
    flex: 2,
    backgroundColor: 'red',
  },
  viev_center: {
    flex: 3.75,
    backgroundColor: 'green',
  },
  viev2: {
    flex: 5.25,
    backgroundColor: 'blue',
  },
}); */
/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    flexDirection: 'row',
    backgroundColor: 'yellow',
    // justifyContent: 'space-between',
    // justifyContent: 'center',
    // justifyContent: 'flex-start',
    // justifyContent: 'flex-end',
    // justifyContent: 'space-around',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  box_1: {
    width: 75,
    height: 75,
    backgroundColor: 'red',
  },
  box_2: {
    width: 75,
    height: 75,
    backgroundColor: 'bisque',
  },
  box_3: {
    width: 75,
    height: 75,
    backgroundColor: 'blue',
  },
  box_4: {
    width: 75,
    height: 75,
    backgroundColor: 'orange',
  },
}); */

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  card_container: {
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  card_body: {
    padding: 10,
  },
  card_title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    marginBottom: 3,
  },
  card_text: {
    fontSize: 18,
    margin: 10,
    marginTop: 3,
  },
  card_button: {
    backgroundColor: '#00C2FF',
    padding: 10,
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  card_button_text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App; */

//dıştaki view e flex:1 verdik yani bulunduğun sınırın tamamını kapla dedik
//childlere 1 verince de yarı yarıya ekranı paylaştılar bunun oranınıda değiştirebiliriz
//childlar aralrında verdiğimiz değere göre parentının oranını paylaşırlar

//& Custom Components

const App = () => {
  let myArr = [
    {
      id: 1,
      title: 'Eddard Stark',
      text: 'Winter is coming...',
      btn: 'I LIKED',
    },
    {
      id: 2,
      title: 'Anthony Harold',
      text: 'When you think it is too late, the truth is, it is still early.',
      btn: 'I LIKED',
    },
    {
      id: 3,
      title: 'A Thinker',
      text: 'Work smarter, not harder.',
      btn: 'I LIKED',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      {myArr.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});

export default App;
