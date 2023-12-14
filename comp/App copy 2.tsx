import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { memo, useCallback, useState } from "react";
import { DialPad } from "./src/dial-pad";
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const width = Dimensions.get("window").width;

export const pinLength = 4;
const pinContainerSize = width / 2;
const pinMaxSize = pinContainerSize / pinLength;
const pinSpacing = 10;
const pinSize = pinMaxSize - pinSpacing * 2;
const App = () => {
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
              width: pinSize,
              borderRadius: pinSize,
            };
          });
          return (
            <Animated.Image
              key={`pin-${i}`}
              style={[aniamtedStyle]}
              source={require("./src/gift.png")}
            />
          );
        })}
      </View>
      <DialPad setCode={setCode} code={code} />
    </View>
  );
};

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
    height: pinSize * 2,
    alignItems: "flex-end",
  },
});
