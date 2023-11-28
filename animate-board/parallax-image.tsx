import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { Colors } from "@goodtechsoft/xs-core-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { Image } from "expo-image";

const AnimatedImage = Animated.createAnimatedComponent(Image);

const MenuScreen = memo(() => {
  const shared = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    shared.value = event.contentOffset.y;
  });

  return (
    <Animated.ScrollView
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      <AnimatedImage
        source={
          "https://images.pexels.com/photos/9056223/pexels-photo-9056223.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        }
        style={{
          width: "100%",
          height: 235,
          transform: [
            {
              translateY: shared,
            },
          ],
        }}
      />
      <View style={{ backgroundColor: "whihte" }}>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
        <Text style={{ fontSize: 30 }}>Mongolia</Text>
      </View>
    </Animated.ScrollView>
  );
});

MenuScreen.displayName = "MenuScreen";

export { MenuScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  image: {
    width: "100%",
    height: 300,
  },
});
