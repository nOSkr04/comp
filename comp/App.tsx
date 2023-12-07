import { StatusBar } from "expo-status-bar";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import * as Updates from "expo-updates";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    Alert.alert("Hi update this worked fine haha");
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50 }}>3.0.2</Text>
      <Text style={{ fontSize: 50 }}>3.0.2</Text>
      <Text style={{ fontSize: 50 }}>3.0.2</Text>
      <Text style={{ fontSize: 50 }}>3.0.2</Text>
      <Text style={{ fontSize: 50 }}>3.0.2</Text>
      <Text style={{ fontSize: 50 }}>3.0.2</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
