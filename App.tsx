import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.circle1}></View>
      <View style={styles.circle2}></View>
      <View style={styles.innercontainer}>
        <View style={styles.innercircletop}></View>
        <View style={styles.innercirclebottom}></View>
        <View
          style={{
            width: 0.5 * Dimensions.get("window").width,
            height: 0.5 * Dimensions.get("window").width,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("./Sign.png")}
            style={{
              width: "65%",
              height: "65%",
              marginBottom: -30,
            }}
            resizeMode="contain"
          />
        </View>

        <Text>
          <Text style={{ fontWeight: "500", color: "grey", fontSize: 14 }}>
            Sent succesfully to{" "}
            <Text style={{ fontWeight: "bold", fontSize: 14, color: "black" }}>
              Lela Crawford
            </Text>
          </Text>
        </Text>

        <Text
          style={{
            fontWeight: "700",
            color: "#406C6C",
            fontSize: 38,
            marginTop: 30,
          }}
        >
          $100.00
        </Text>

        <View style={styles.usercontainer}>
          <View
            style={{
              width: 0.5 * Dimensions.get("window").width,
              height: 0.5 * Dimensions.get("window").width,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("./User.png")}
              style={{
                width: "35%",
                height: "35%",
              }}
              resizeMode="contain"
            />
          </View>

          <Text style={{ marginLeft: -50 }}>
            <Text
              style={{
                fontWeight: "bold",
                color: "black",
                fontSize: 18.5,
              }}
            >
              John Crawfood{"\n"}
              <Text style={{ fontWeight: "500", fontSize: 14, color: "grey" }}>
                John123@gmail.com
              </Text>
            </Text>
          </Text>
        </View>

        <View
          style={{
            marginTop: -30,
            height: 1,
            width: "90%",
            backgroundColor: "lightgrey",
          }}
        ></View>

        <Text style={{ lineHeight: 24, textAlign: "center", marginTop: 20 }}>
          <Text style={{ fontWeight: "500", color: "grey", fontSize: 14 }}>
            Transaction done on{" "}
            <Text style={{ fontWeight: "500", fontSize: 14, color: "black" }}>
              12 January 2018. {"\n"}
            </Text>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 14,
                color: "grey",
              }}
            >
              Your reference number is 03492390
            </Text>
          </Text>
        </Text>

        <View style={styles.button}>
          <Text style={{ fontSize: 20, color: "#fff" }}>Continue</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#406C6C",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    paddingTop: 50,
  },

  circle1: {
    width: 220,
    height: 220,
    borderRadius: 200,
    backgroundColor: "#507677",
    position: "absolute",
    top: -100,
    left: -50,
  },

  circle2: {
    width: 140,
    height: 140,
    borderRadius: 200,
    backgroundColor: "#507677",
    position: "absolute",
    top: -50,
    right: -20,
  },

  innercontainer: {
    width: "85%",
    height: "80%",
    backgroundColor: "#ffff",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
    position: "relative",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    paddingTop: 10,
  },

  innercircletop: {
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: "#CAD6D6",
    position: "absolute",
    top: -120,
    left: -120,
  },

  innercirclebottom: {
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: "#CAD6D6",
    position: "absolute",
    bottom: -120,
    right: -120,
  },

  usercontainer: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "30%",
    marginTop: -40,
  },

  button: {
    width: "90%",
    height: 55,
    backgroundColor: "#406C6C",
    borderRadius: 100,
    bottom: -50,
    alignItems: "center",
    justifyContent: "center",
  },
});
