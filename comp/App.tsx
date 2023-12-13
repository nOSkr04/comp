import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { memo, useCallback, useState } from "react";
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { DialPad } from "./src/dial-pad";

const width = Dimensions.get("window").width;

export const pinLength = 4;
const pinContainerSize = width / 2;
const pinMaxSize = pinContainerSize / pinLength;
const pinSpacing = 10;
const pinSize = pinMaxSize - pinSpacing * 2;
const App = memo(() => {
  const [code, setCode] = useState<number[]>([]);

  return (
    <View style={styles.container}>
      <View style={styles.pinRoot}>
        {[...Array(pinLength).keys()].map((i) => {
          const isSelected = !!code[i];

          const aniamtedStyle = useAnimatedStyle(() => {
            return {
              height: isSelected
                ? withTiming(pinSize, {
                    duration: 200,
                  })
                : withTiming(2, {
                    duration: 200,
                  }),
              marginBottom: isSelected
                ? withTiming(pinSize / 2, {
                    duration: 200,
                  })
                : withTiming(0, {
                    duration: 200,
                  }),
            };
          });
          return (
            <Animated.View
              key={`pin-${i}`}
              style={[styles.pinContainer, aniamtedStyle]}
            ></Animated.View>
          );
        })}
      </View>
      <DialPad setCode={setCode} code={code} />
    </View>
  );
});

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  pinRoot: {
    flexDirection: "row",
    gap: pinSpacing * 2,
    marginBottom: 40,
    // backgroundColor: "green",
    height: pinSize * 2,
    alignItems: "flex-end",
  },
  pinContainer: {
    width: pinSize,
    borderRadius: pinSize,
    backgroundColor: "red",
  },
});
