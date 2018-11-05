import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';

function MyButton ({ title, color, onPress, outline }) {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (color && !outline) {
    buttonStyles.push({backgroundColor: color});
  } else if (color && outline) {
    textStyles.push({color: color});
    textStyles.push({borderWidth: 1});
    textStyles.push({borderStyle: 'solid'});
    textStyles.push({borderColor: color});
  }

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}>
        <Text style={textStyles}>
          {title}
        </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: Platform.select({
      ios: {
        height: 45,
        borderRadius: 2,
        marginVertical: 10,
        marginHorizontal: 'auto'
      },
      android: {
        elevation: 4,
        borderRadius: 2,
        marginVertical: 10,
        marginHorizontal: 'auto'
      },
    }),
    text: Platform.select({
      ios: {
        color: 'white',
        textAlign: 'center',
        padding: 10,
        fontSize: 18,
      },
      android: {
        color: 'white',
        textAlign: 'center',
        padding: 10,
        fontWeight: '500',
      },
    }),
});

export default MyButton;