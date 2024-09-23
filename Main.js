import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  Alert,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
//import DrawerNavigator from "./drawer/DrawerNavigator";
import "react-native-gesture-handler";

const SECTIONS = [
  {
    title: "Recharges",
    vertical: true,
    //flex :1/4,
    data: [
      {
        key: "1",
        text: "Mobile",
        image: require("../../assets/recharge.png"),
      },
      {
        key: "2",
        text: "DTH",
        image: require("../../assets/dth2.png"),
      },

      {
        key: "3",
        text: "CableTV",
        image: require("../../assets/cabletv2.png"),
        // uri: 'https://picsum.photos/id/1002/200',
      },
      {
        key: "4",
        text: "Postpaid",

        image: require("../../assets/postpaid2.png"),
      },
    ],
  },
  {
    title: "Tour & Travel Booking",
    vertical: true,
    //flex :1/4,
    data: [
      {
        key: "5",
        text: "Flight",
        image: require("../../assets/flight.png"),
      },
      {
        key: "6",
        text: "Bus",
        image: require("../../assets/bus.png"),
      },

      {
        key: "7",
        text: "Holidays",
        image: require("../../assets/holiday.png"),
        // uri: 'https://picsum.photos/id/1002/200',
      },
      {
        key: "8",
        text: "Hotels",

        image: require("../../assets/hotel.png"),
      },
      // {
      //   key: '5',
      //   text: 'Item text 5',
      //   uri: 'https://picsum.photos/id/1008/200',
      // },
    ],
  },
  {
    title: "Recharge & Pay Bills",
    // horizontal: true,
    vertical: true,
    data: [
      {
        key: "9",
        text: "Electricity",
        image: require("../../assets/electricity2.png"),
      },

      {
        key: "10",
        text: "Water",
        image: require("../../assets/water2.png"),
      },
      {
        key: "11",
        text: "Cylinder",
        image: require("../../assets/cylinder2.png"),
      },
      {
        key: "12",
        text: "Education",
        image: require("../../assets/education2.png"),
      },
      {
        key: "13",
        text: "Landline",
        image: require("../../assets/landline2.png"),
      },
      {
        key: "14",
        text: "Pipegas",
        image: require("../../assets/pipegas2.png"),
      },
      {
        key: "15",
        text: "Item text 5",
        image: require("../../assets/electricity2.png"),
      },
      {
        key: "16",
        text: "Item text 4",
        image: require("../../assets/electricity2.png"),
      },
    ],
  },
  {
    title: "Financial Services",
    // horizontal: true,
    vertical: true,
    data: [
      {
        key: "17",
        text: "Credit Card",
        image: require("../../assets/creditcard2.png"),
      },
      {
        key: "18",
        text: "Insurance",
        image: require("../../assets/insurance2.png"),
      },

      {
        key: "19",
        text: "Pay Loan",
        image: require("../../assets/loan2.png"),
      },
      {
        key: "20",
        text: "MunicipalTax",
        image: require("../../assets/municipal2.png"),
      },
    ],
  },
];

export default function Main({ navigation }) {
  // const { navigation } = props;
  // const [key, OnClickitem] = useState();

  const ListItem = ({ item }) => {
    return (
      <View style={styles.item}>
        {/* <Image source={{ uri: item.uri}} */}
        <TouchableOpacity
          onPress={() => {
            OnClickitem(item);
          }}
        >
          <Image
            source={item.image}
            style={styles.itemPhoto}
            resizeMode="cover"
          />
          <Text style={styles.itemText}>{item.text}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  function OnClickitem(item) {
    let key = item.key;
    if (key == "1") {
      Alert.alert("Mobile");
      // console.log("Mobile =>",key);
      navigation.navigate("Recharge");
    } else if (key == "2") {
      // Alert.alert('dth')
      navigation.navigate("dth");
    } else if (key == "3") {
      // Alert.alert('CableTv')
      navigation.navigate("CableTv");
    } else if (key == "4") {
      Alert.alert("Postpaid");
      navigation.navigate("Postpaid");
    } else if (key == "5") {
      Alert.alert("Flight");
      navigation.navigate("Flight");
    } else if (key == "6") {
      Alert.alert("Bus");
      navigation.navigate("Bus");
    } else if (key == "7") {
      Alert.alert("Holidays");
      navigation.navigate("Holidays");
    } else if (key == "8") {
      Alert.alert("Hotels");
      navigation.navigate("Hotels");
    } else if (key == "9") {
    }
  }

  return (
    <View style={styles.container}>
      {/* <DrawerNavigator /> */}

      <Image
        source={require("../../assets/switzer.jpg")}
        style={styles.img}
        resizeMode="cover"
      />
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.vertical ? (
                <FlatList
                  vertical
                  numColumns={4}
                  showsVerticalScrollIndicator={false}
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  horizontal={false}
                  // keyExtractor={item => item.key}
                  // extraData={key}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section, navigate }) => {
            //      if (section.vertical) {
            //        return null;
            //      }
            //  return <ListItem item={item}
            //   />;
          }}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  sectionHeader: {
    fontWeight: "800",
    fontSize: 15,
    color: "#145693",
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B8E2F2",
  },
  item: {
    margin: 18,
    alignItems: "center",
  },
  itemPhoto: {
    width: 45,
    height: 45,
  },
  itemText: {
    color: "#000000",
    marginTop: 5,
    fontSize: 12,
  },
  img: {
    height: 400 / 2,
    width: 700 / 2,
    marginTop: 5,
    borderRadius: 15,
  },
});
