import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Button,
  View,
  Alert,
  Navigator,
  TouchableOpacity,
} from "react-native";
import Axios from "axios";

export default function RegisterScreen() {
  const [username, setUserName] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [email, setemail] = React.useState("");
  const [number, setNumber] = React.useState("");

  const Registeruser = async () => {
    try {
      
      const { data } = await Axios.post(
        "http://192.168.29.77/login/register.php",
        {
          user: username,
          mob: mobile,
          email: email,
          pass: number,
        }
      );

      if (data.status == "success") {
        alert("user created successful");
      } else {
        alert("fail to created new user ");
      }
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register here </Text>
      {/* <Text style={styles.title1}> Please Enter all mandatory filds</Text> */}
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUserName(text)}
        value={username}
        placeholder="Please Enter UserName"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setMobile(text)}
        value={mobile}
        keyboardType="numeric"
        placeholder="Please Enter Mobile"
      />

      <TextInput
        style={styles.input}
        onChangeText={(text) => setemail(text)}
        value={email}
        placeholder="Please Enter Email"
      />

      <TextInput
        style={styles.input}
        onChangeText={(text) => setNumber(text)}
        value={number}
        placeholder="Password"
        secureTextEntry={true}
        keyboardType="numeric"
      />

      {/* <Text style={styles.title1}>  Register?</Text> */}

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          Registeruser();
        }}
      >
        <Text>Register</Text>
      </TouchableOpacity>

      {/* <Button
        style={styles.btn}
        color= "gray"
        background= "silver"
        variant="default"
        marginTop="20"
        title="Register"
        onPress={() => navigation.navigate('Login')}
                    // onPress={() => this.props.navigation.navigate('Screen')}
      /> */}

      {/* <View style={styles.fixToText}>
        <Button
          title="Logni"
          color= "black"
          onPress={() => Alert.alert('Sucessfully Login')}
        />
        <Button
          title="Sign up"
          color= "black"
          onPress={() => Alert.alert('Please signup first to Login')}
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "center",
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingLeft: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
    height: 40,
    textAlign: "center",
    justifyContent: "center",
    fontSize: 14,
    color: "black",
  },
  btn: {
    marginTop: 30,
    borderRadius: 25,
  },
  loginBtn: {
    width: "90%",
    borderRadius: 20,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
    marginTop: 20,
    backgroundColor: "#2492eb",
  },
  // fixToText: {

  //   flexDirection: 'row',
  //   justifyContent: 'space-between',

  // },
});
