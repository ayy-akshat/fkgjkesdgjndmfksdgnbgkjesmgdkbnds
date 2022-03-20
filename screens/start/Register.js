import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-navigation";
import styles from "../../styles";

export default class RegisterScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.sav} />
        <Text style={styles.titleText}>Register</Text>
        <View style={{width: "100%"}}>
          <TextInput style={styles.optionTextInput} placeholder="Email" />
          <TextInput style={styles.optionTextInput} placeholder="Password" />
          <TextInput
            style={styles.optionTextInput}
            placeholder="Confirm Password"
          />
        </View>
        <TouchableOpacity style={styles.blueCoolButton}>
          <Text style={styles.coolButtonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
