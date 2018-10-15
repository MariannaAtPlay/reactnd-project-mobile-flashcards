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
        width: 120,
        borderRadius: 2,
        margin: 10,
      },
      android: {
        elevation: 4,
        borderRadius: 2,
        margin: 10
      },
    }),
    text: Platform.select({
      ios: {
        color: 'white',
        textAlign: 'center',
        padding: 8,
        fontSize: 18,
      },
      android: {
        color: 'white',
        textAlign: 'center',
        padding: 8,
        fontWeight: '500',
      },
    }),
});

export default MyButton;