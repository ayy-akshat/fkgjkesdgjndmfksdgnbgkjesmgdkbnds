import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-navigation";
import Gap from "../../components/gap";
import styles from "../../styles";

const pages = [
  {
    title: "Welcome",
    description: "Personalized workouts will help you gain strength, get in better shape and embrace a healthy lifestyle.",
    img: require("../../assets/fitPeople.png")
  },
  {
    title: "Healthy Lifestyle",
    description: "Having a healthy lifestyle is key to life.",
    img: require("../../assets/fitLabel.png")
  },
  {
    title: "Stay strong",
    description: "Being strong improves your confidence and emotional stability.",
    img: require("../../assets/fitPeople.png")
  },
];

export default class WelcomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 0,
      
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <SafeAreaView style={styles.sav} />
          <Gap size="50" />
          <Image
            source={pages[this.state.page].img}
            style={{
              width: 350,
              height: 350,
            }}
          />
        </View>
        <View>
          <Text style={styles.titleText}>{pages[this.state.page].title}</Text>
          <Text style={styles.captionText}>
            {pages[this.state.page].description}
          </Text>
        </View>
        <View>
          <Text style={[styles.captionText, {color: "gray", fontStyle: "italic", fontWeight: "200"}]}>
              {this.state.page + 1}/{pages.length}
          </Text>
          <TouchableOpacity
            style={styles.orangeCoolButton}
            onPress={() => {
              if (this.state.page + 1 === pages.length) {
                this.props.navigation.navigate("Register");
              }
              this.setState({ page: this.state.page + 1 });
            }}
          >
            <Text style={styles.coolButtonText}>
              {this.state.page + 1 === pages.length ? "GET STARTED" : "NEXT"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
