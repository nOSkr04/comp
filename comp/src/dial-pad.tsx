import { FlatList, StyleSheet } from "react-native";
import React, { memo, useCallback } from "react";
import { DialCard } from "./dial-card";

export const dialPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "del"];

const _spacing = 20;

type Props = {
  setCode: React.Dispatch<React.SetStateAction<number[]>>;
  code: number[];
};

const DialPad = memo(({ setCode, code }: Props) => {
  const renderDialPad = useCallback(
    ({ item }: { item: string | number }) => {
      return (
        <DialCard
          item={item}
          onPress={(item: string | number) => {
            if (item === "del") {
              setCode((prevCode) => prevCode.slice(0, prevCode.length - 1));
            } else if (code.length === 4) {
              return;
            } else if (typeof item === "number") {
              setCode((prevcode) => [...prevcode, item]);
            }
          }}
        />
      );
    },
    [code.length, setCode]
  );
  //
  return (
    <FlatList
      numColumns={3}
      data={dialPad}
      style={styles.container}
      scrollEnabled={false}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={styles.gap}
      columnWrapperStyle={styles.gap}
      renderItem={renderDialPad}
    />
  );
});

export { DialPad };
const styles = StyleSheet.create({
  gap: {
    gap: _spacing,
  },
  container: {
    flexGrow: 0,
  },
});
