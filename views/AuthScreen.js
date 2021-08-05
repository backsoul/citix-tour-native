import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const AuthScreen = () => {
  const [email, setEmail] = React.useState("daniel@gmail.com");
  const [password, setPassword] = React.useState("123456");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingrese sesión</Text>
      <TextInput onChangeText={setEmail} value={email} style={styles.input} />
      <TextInput
        onChangeText={setPassword}
        value={password}
        style={styles.input}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default AuthScreen;
