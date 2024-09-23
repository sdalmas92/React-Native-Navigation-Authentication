import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  View,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";
import Axios from "axios";

export default function LoginScreen({ navigation }) {
  const [text, onChangeText] = React.useState("");

  const [username, setUserName] = React.useState("");
  const [number, setNumber] = React.useState("");

  const Loginuser = async () => {
    try {
      // console.log("user =>",username);
      // console.log("pass =>",number);

      const { data } = await Axios.post(
        "http://192.168.29.214/login/authentication.php",
        {
          user: username,
          pass: number,
        }
      );

      if (data.status == "success") {
        // alert("user login successful");
        //  navigation.navigate('Home');

        Alert.alert("User", "login successful", [
          {
            // text: 'Cancel',
            // onPress: () => console.log('Cancel Pressed'),
            // style: 'cancel',
          },
          { text: "OK", onPress: () => navigation.navigate("Home") },
        ]);

        //  navigate('/Home');
        // history.push('/Home')
        //navigate('./screens/HomeScreen');
      } else {
        alert("user not found");
      }
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login </Text>
      <Text style={styles.title1}> Please Enter your UserName & Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUserName(text)}
        value={username}
        placeholder="UserName"
      />

      <TextInput
        style={styles.input}
        onChangeText={(text) => setNumber(text)}
        value={number}
        placeholder="Password"
        secureTextEntry={true}
        keyboardType="numeric"
      />
      <Text
        onPress={() => navigation.navigate("Registration")}
        style={styles.title1}
      >
        Register?
      </Text>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          Loginuser();
        }}
      >
        <Text>LOGIN</Text>
      </TouchableOpacity>

      {/* <Button
        style={styles.btn}
        color= "gray"
        background= "silver"
        variant="default"
        marginTop="20"
        title="Login"
        onPress={() => Alert.alert('Please signup first to Login')}
                    // onPress={() => this.props.navigation.navigate('Screen')}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginLeft: 15,
    marginRight: 15,
    textAlign: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingLeft: 10,
    alignItems: "center",
    borderRadius: 20,
  },
  title: {
    height: 40,
    margin: 5,
    textAlign: "center",
    justifyContent: "center",
    fontSize: 25,
    color: "#145693",
  },
  title1: {
    height: 30,
    textAlign: "center",
    justifyContent: "center",
    fontSize: 14,
    color: "#145693",
  },
  btn: {
    marginTop: 30,
  },

  loginBtn: {
    width: "90%",
    borderRadius: 20,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
    marginTop: 10,
    backgroundColor: "#2492eb",
  },
  // fixToText: {

  //   flexDirection: 'row',
  //   justifyContent: 'space-between',

  // },
});
