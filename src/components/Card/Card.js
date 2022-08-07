import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './Card.style';

const Card = ({item}) => {
  const {title, text, btn} = item;

  return (
    <View style={styles.card_container}>
      <View style={styles.card_body}>
        <Text style={styles.card_title}>{title}</Text>
        <Text style={styles.card_text}>{text}</Text>
      </View>
      <TouchableOpacity
        style={styles.card_button}
        onPress={() => Alert.alert('You liked the card')}>
        <Text style={styles.card_button_text}>{btn}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
