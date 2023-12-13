import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { memo, useCallback } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { dialPad } from "./dial-pad";
const { width } = Dimensions.get("window");
const dialPadSize = width * 0.2;
const dialPadTextSize = dialPadSize * 0.4;
const DialCard = memo(
  ({
    item,
    onPress,
  }: {
    item: string | number;
    onPress: (item: (typeof dialPad)[number]) => void;
  }) => {
    const borderStyle = useCallback(() => {
      return {
        borderWidth: item === "" ? 0 : 1,
      };
    }, []);
    return (
      <TouchableOpacity
        onPress={() => {
          onPress(item);
        }}
        disabled={item === ""}
      >
        <View style={[styles.container, borderStyle()]}>
          {item === "del" ? (
            <Ionicons
              name="backspace-outline"
              color={"black"}
              size={dialPadTextSize}
            />
          ) : (
            <Text style={styles.textStyle}>{item}</Text>
          )}
        </View>
      </TouchableOpacity>
    );
  }
);

export { DialCard };

const styles = StyleSheet.create({
  container: {
    width: dialPadSize,
    height: dialPadSize,
    borderRadius: dialPadSize,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: dialPadTextSize,
  },
});
