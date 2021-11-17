import React, { useState } from "react";
import { Alert, Button, View } from "react-native";
import CategoriesList from "./Income";
import OutcomeCalculater from "./Outcome";
const Page1 = function (props) {
  const [currentPage, setCurrentPage] = useState("calc"); //"calc" | "cats"
  return (
    <View style={{ flex: 1 }}>
      <Button
        title="Go to NExt Step"
        onPress={() => setCurrentPage(currentPage == "calc" ? "cats" : "calc")}
      />
      {currentPage === "cats" && (
        <CategoriesList onPressCategory={(text) => Alert.alert(text)} />
      )}
      {currentPage === "calc" && <OutcomeCalculater />}
    </View>
  );
};

export default Page1;
