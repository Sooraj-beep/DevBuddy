import React from "react";
import { Text, StyleSheet, ImageBackground } from "react-native";

function SignupScreen({ navigation }) {
  return (
    <>
      <ImageBackground
        style={styles.imgBG}
        source={{
          uri:
            "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg",
        }}
        resizeMode="cover"
        blurRadius={1}
      >
        <Text>Signup Screen</Text>
      </ImageBackground>
    </>
  );
}

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  imgBG: {
    flex: 1,
    justifyContent: "center",
  },
});

export default SignupScreen;
