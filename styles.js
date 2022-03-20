import { StyleSheet, Platform } from "react-native";

const appColorPalette = {
  red: "#eb524d",
  orange: "#f1a040",
  green: "#6ab458",
  skyblue: "#6ae5fb",
  blue: "#3b7adf",
  pink: "#d677ba",
  purple: "#a34adf",
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "space-between"
  },
  sav: {
    height: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  titleText: {
    fontSize: 30,
    color: "black",
    marginVertical: 20,
    textAlign: "center",
    fontWeight: "600"
  },
  captionText: {
    fontSize: 16,
    color: "#333333",
    paddingHorizontal: 20,
    textAlign: "center"
  },
  orangeCoolButton: {
    backgroundColor: appColorPalette.orange,
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 100,
    marginVertical: 30
  },
  blueCoolButton: {
    backgroundColor: appColorPalette.blue,
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 100,
    marginVertical: 30
  },
  coolButtonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "600",
  },
  optionTextInput: {
    width: "80%",
    borderColor: "gray",
    borderWidth: 4,
    padding: 20,
    borderRadius: 200,
    alignItems: "center",
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
