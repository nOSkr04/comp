import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";

const App = () => {
  const animation = useRef(null);
  return (
    <>
      <LottieView
        autoPlay
        ref={animation}
        style={styles.root}
        source={require("./animate.json")}
      />
      <View style={styles.container}>
        <TextInput placeholder="test" style={styles.input} />
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    pointerEvents: "none",
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    width: "90%",
  },
});
