import { StyleSheet, Text, View } from "react-native";
import React, { useState, useCallback } from "react";
import { Drawer } from "react-native-drawer-layout";
const index = () => {
  const [open, setOpen] = useState(false);
  const closeDrawer = useCallback(() => {
    setOpen(false);
  }, []);
  const openDrawer = useCallback(() => {
    setOpen(true);
  }, []);
  return (
    <Drawer
      drawerPosition="left"
      drawerStyle={styles.drawer}
      drawerType="slide"
      hideStatusBarOnOpen={true}
      onClose={closeDrawer}
      onOpen={openDrawer}
      open={open}
      overlayStyle={styles.overlay}
      renderDrawerContent={() => {
        return <CategoryList />;
      }}
      statusBarAnimation="fade"
      style={styles.root}
    >
      <DrawerSceneWrapper>
        <Text>index</Text>
      </DrawerSceneWrapper>
    </Drawer>
  );
};

export default index;

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "transparent",
  },
  drawer: { backgroundColor: Colors.primary },
  root: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});
