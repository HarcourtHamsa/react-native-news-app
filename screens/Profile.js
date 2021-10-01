import React from "react";
import Box from "../components/Box";
import { StyleSheet, Text, Switch, View, SectionList } from "react-native";
import Icon from "@expo/vector-icons/build/MaterialCommunityIcons";
import { COLORS, FONTS, SIZES } from "../constants";

const DATA = [
  {
    title: "Settings",
    data: ["Language", "Edit account", "Change password"],
  },
  {
    title: "General",
    data: ["Help", "Privacy", "Terms & Conditions"],
  },
];

const AppSwitch = ({ name, defaultState }) => {
  const [isEnabled, setIsEnabled] = React.useState(defaultState);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <View style={styles.switchContainer}>
      <Text style={{ ...FONTS.h3, color: "white" }}>{name}</Text>
      <Switch
        trackColor={{ false: "gray", true: "gray" }}
        thumbColor={isEnabled ? "tomato" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const AppSettingsButton = ({ name }) => {
  return (
    <View style={styles.settingsBtn}>
      <Text style={{ ...FONTS.h3, color: "gray" }}>{name}</Text>
      <Icon name={"chevron-right"} size={30} color={"gray"} />
    </View>
  );
};

const Divider = () => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        marginVertical: SIZES.base,
      }}
    />
  );
};

const Profile = () => {
  return (
    <Box>
      <View style={styles.flex}>
        <View style={styles.avi} />
        <View style={{ backgroundColor: "transparent" }}>
          <Text style={{ ...FONTS.h2, color: "white" }}>Harcourt Hamsa</Text>
          <Text style={{ ...FONTS.h3, color: "gray" }}>
            hamsaharcourt@gmail.com
          </Text>

          <Text
            style={{ ...FONTS.h3, color: "tomato", marginTop: SIZES.margin }}
          >
            Sign out
          </Text>
        </View>
      </View>

      <View style={styles.main}>
        <AppSwitch name="Dark mode" defaultState={true} />
        <AppSwitch name="Notification" defaultState={false} />
      </View>

      <SectionList
        sections={DATA}
        keyExtractor={(_, index) => index}
        ListHeaderComponent={() => <Divider />}
        renderItem={({ item }) => <AppSettingsButton name={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  avi: {
    width: SIZES.width / 3,
    height: SIZES.width / 3,
    backgroundColor: "gray",
    borderRadius: 200,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  main: {
    marginTop: SIZES.margin,
  },
  switchContainer: {
    backgroundColor: COLORS.prmary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SIZES.margin,
  },
  header: {
    ...FONTS.h3,
    color: "white",
  },
  settingsBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: SIZES.base,
  },
});

export default Profile;
