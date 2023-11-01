import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function AboutScreen({ navigation, route }) {
  let dataObj = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>About </Text>
      <Text style={styles.para}>
        Our company was establish in 1990. We have many types of candy such as
        cotton candy, mints, and various types of chocolate. We shipped
        worldwide although shipping price will vary depending on the location.
        We are very proud of the candy we make and sell. We hope our customer
        enjoys our candy!
      </Text>
      <TouchableOpacity
        style={styles.buttons}
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.text}> Home </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "centered",
    backgroundColor: "#c8a8e9",
    padding: 8,
  },
  paragraph: {
    textAlign: "center",
    marginTop: "20px",
    fontStyle: "italic",
    fontWeight: "bold",
  },
  para: {
    textAlign: "center",
    marginTop: "40px",

    width: "450px",
    margin: "auto",
  },
  buttons: {
    backgroundColor: "#e3aadd",
    padding: 5,
    width: "150px",
    height: "30px",
    justifyContent: "center",
    margin: "auto",
    marginBottom: "255px",
  },
  text: {
    color: "#ffffff",
    textAlign: "center",
  },
});
