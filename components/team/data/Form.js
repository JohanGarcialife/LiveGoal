import React from "react";
import { View, Text } from "react-native";

export default function Form(props) {
  const { form } = props;

  return (
    <View className="bg-mediumgray/50 rounded-lg p-4 my-2 space-y-3 ">
      <Text className=" text-white text-3xl font-bold text-center">Form</Text>
      <View className="flex-row items-center justify-center space-x-2">
        <View
          className={
            (form.charAt(7) === "L" &&
              "bg-red-600 py-1 px-2 rounded-lg items-center justify-center") ||
            (form.charAt(7) === "W" &&
              "bg-lime-600 py-1 px-2 rounded-lg items-center justify-center") ||
            (form.charAt(7) === "D" &&
              "bg-yellow-600 py-1 px-2 rounded-lg items-center justify-center")
          }
        >
          <Text className="font-bold text-white">{form.charAt(7)}</Text>
        </View>
        <View
          className={
            (form.charAt(8) === "L" &&
              "bg-red-600 py-1 px-2 rounded-lg items-center justify-center") ||
            (form.charAt(8) === "W" &&
              " bg-lime-600 py-1 px-2 rounded-lg items-center justify-center") ||
            (form.charAt(8) === "D" &&
              "bg-yellow-600 py-1 px-2 rounded-lg items-center justify-center")
          }
        >
          <Text className="font-bold text-white">{form.charAt(8)}</Text>
        </View>

        <View
          className={
            (form.charAt(9) === "L" &&
              "bg-red-600 py-1 px-2 rounded-lg items-center justify-center") ||
            (form.charAt(9) === "W" &&
              " bg-lime-600 py-1 px-2 rounded-lg items-center justify-center") ||
            (form.charAt(9) === "D" &&
              "bg-yellow-600 py-1 px-2 rounded-lg items-center justify-center")
          }
        >
          <Text className="font-bold text-white">{form.charAt(9)}</Text>
        </View>

        <View
          className={
            (form.charAt(10) === "L" &&
              "bg-red-600 py-1 px-2 rounded-lg items-center justify-center") ||
            (form.charAt(10) === "W" &&
              " bg-lime-600 py-1 px-2 rounded-lg items-center justify-center") ||
            (form.charAt(10) === "D" &&
              "bg-yellow-600 py-1 px-2 rounded-lg items-center justify-center")
          }
        >
          <Text className="font-bold text-white">{form.charAt(10)}</Text>
        </View>

        <View
          className={
            (form.charAt(11) === "L" &&
              "bg-red-600 py-1 px-2 rounded-lg items-center justify-center") ||
            (form.charAt(11) === "W" &&
              " bg-lime-600 py-1 px-2 rounded-lg items-center justify-center") ||
            (form.charAt(11) === "D" &&
              "bg-yellow-600 py-1 px-2 rounded-lg items-center justify-center")
          }
        >
          <Text className="font-bold text-white">{form.charAt(11)}</Text>
        </View>
      </View>
    </View>
  );
}
