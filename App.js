import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
const Dices = [
  require("./assets/1.png"),
  require("./assets/2.png"),
  require("./assets/3.png"),
  require("./assets/4.png"),
  require("./assets/5.png"),
  require("./assets/6.png"),
];
export default function App() {
  const [left, setLeft] = useState(1);
  const [right, setRight] = useState(1);
  const Rand = () => {
    setLeft(Math.floor(Math.random() * (6 - 1 + 1) + 1));
    setRight(Math.floor(Math.random() * (6 - 1 + 1) + 1));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ff6e6e",
      }}
    >
      <View
        style={{
          marginTop: 80,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          Dice Game
        </Text>
      </View>

      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            height: 200,
            flexDirection: "row",
            marginTop: 150,
          }}
        >
          <View
            style={{
              flex: 1,
              padding: 10,
              justifyContent: "center",
            }}
          >
            <Image
              source={Dices[left - 1]}
              style={{ width: "100%", resizeMode: "contain" }}
            />
          </View>
          <View
            style={{
              flex: 1,
              padding: 10,
              justifyContent: "center",
            }}
          >
            <Image
              source={Dices[right - 1]}
              style={{ width: "100%", resizeMode: "contain" }}
            />
          </View>
        </View>
        <View style={{ alignItems: "center", marginTop: 200 }}>
          <TouchableOpacity
            style={{
              padding: 20,
              backgroundColor: "#FA5656",
              width: "70%",
              alignItems: "center",
              borderRadius: 15,
            }}
            onPress={() => Rand()}
          >
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
              Dice
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
