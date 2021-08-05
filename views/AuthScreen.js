import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import FlatButton from ".././components/Button";

const AuthScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function login() {
    console.log(email);
    console.log(password);
  }
  return (
    <View style={styles.container}>
      <View style={styles.sub_container}>
        <Text style={styles.title}>Let's sign you in.</Text>
        <Text style={styles.subtitle}>Welcome back.</Text>
        <Text style={styles.subtitle}>You've been missed.</Text>
        <View style={styles.content_inputs}>
          <TextInput
            onChangeText={setEmail}
            value={email}
            placeholder="Phone, email or username"
            style={styles.input}
          />
          <TextInput
            onChangeText={setPassword}
            value={password}
            style={styles.input}
            placeholder="Password"
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_login}>
          Don't have an account? <Text style={styles.text_bold}>Register</Text>
        </Text>
        <FlatButton
          text="Sign In"
          onPress={() => login()}
          style={styles.button_signIn}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text_login: {
    color: "white",
    fontWeight: "100",
    marginBottom: 20,
  },
  text_bold: {
    color: "white",
    fontWeight: "600",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0.4,
    borderColor: "#9694A0",
    fontSize: 16,
    fontWeight: "600",
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "100%",
    color: "#9694A0",
  },
  title: {
    marginVertical: 10,
    fontSize: 34,
    textAlign: "left",
    color: "white",
    fontWeight: "600",
    fontFamily: "system-ui",
    width: "100%",
  },
  subtitle: {
    fontSize: 30,
    width: "100%",
    textAlign: "left",
    color: "white",
    fontWeight: "400",
    fontFamily: "system-ui",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#18171F",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  content_inputs: {
    marginTop: 60,
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  sub_container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  footer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default AuthScreen;
