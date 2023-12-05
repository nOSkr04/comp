import React from "react";
import { StyleSheet, View } from "react-native";
import Snowflake from "./snow-flake";

function MenuScreen() {
  return (
    <View style={styles.container}>
      {new Array(100).fill(true).map((_, i) => (
        <Snowflake key={i} />
      ))}
    </View>
  );
}

export { MenuScreen };

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
});
