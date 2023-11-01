import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Welcome </Text>
      <Text style={styles.para}>
        Try out our new flavors of candy today! Or get our new limited edition
        candy!
      </Text>

      <Text style={styles.para}>
        Learn more about our company by reading out About page.
      </Text>

      <TouchableOpacity
        style={styles.button}
        title="Go to About"
        onPress={() => navigation.navigate("AboutScreen")}
      >
        <Text style={styles.text}> About </Text>
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
  button: {
    backgroundColor: "#e3aadd",
    padding: 5,
    width: "150px",
    height: "30px",
    justifyContent: "center",
    margin: "auto",

    marginTop: "150px",
  },
  para: {
    textAlign: "center",
    marginTop: "40px",
  },

  text: {
    color: "#ffffff",
    textAlign: "center",
  },
  paragraph: {
    textAlign: "center",
    marginTop: "20px",
    fontStyle: "italic",
    fontWeight: "bold",
  },
});
