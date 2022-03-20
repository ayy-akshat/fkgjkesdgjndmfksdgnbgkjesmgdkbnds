import React, { useEffect, useState } from "react";

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TextInput
} from "react-native";

import { Pedometer } from "expo-sensors";

import CircularProgress from "react-native-circular-progress-indicator";

export default function App() {
  const [PedomaterAvailability, SetPedomaterAvailability] = useState("");

  const [StepCount, SetStepCount] = useState(0);

  var WindowHeight = Dimensions.get("window").height;

  var Dist = StepCount / 1300;

  var DistanceCovered = Dist.toFixed(4);

  var cal = DistanceCovered * 60;

  var caloriesBurnt = cal.toFixed(4);

  React.useEffect(() => {
    subscribe();
  }, []);

  subscribe = () => {
    const subscription = Pedometer.watchStepCount((result) => {
      SetStepCount(result.steps);
    });

    Pedometer.isAvailableAsync().then(
      (result) => {
        SetPedomaterAvailability(String(result));
      },

      (error) => {
        SetPedomaterAvailability(error);
      }
    );
  };

  return (
    <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={styles.headingDesign}>
            {PedomaterAvailability ? "" : "Pedometer is NOT available on your device!"}
          </Text>
        </View>

        <View style={{ flex: 3, alignItems: "center" }}>
          <CircularProgress
            value={StepCount}
            maxValue={6500} //based on steps
            radius={200}
            textColor={"#ecf0f1"}
            activeStrokeColor={"black"}
            inActiveStrokeColor={"darkgray"}
            // these 3 have to be changed with scale 0.0125:1:1
            inActiveStrokeOpacity={0.25}
            inActiveStrokeWidth={20}
            activeStrokeWidth={20}
            title={"Step Count"}
            titleColor={"#ecf0f1"}
            titleStyle={{ fontWeight: "bold" }}
          />
        </View>

        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.textDesign}>
              Target:
            </Text>
            <TextInput
            placeholder="Steps"
            keyboardType="numeric"
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={[styles.textDesign, {}]}>
              Distance Covered : {DistanceCovered} km
            </Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={[styles.textDesign, {}]}>
              Calories Burnt : {caloriesBurnt}
            </Text>
          </View>

          <StatusBar style="auto" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headingDesign: {
    backgroundColor: "gray",
    alignSelf: "center",
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  textDesign: {
    fontSize: 25,
    color: "black",
    fontWeight: "bold",
    padding: 2,
  },
});
