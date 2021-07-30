import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { useForm } from "react-hook-form";

import { ColorableButton } from "../Components/ColorableButton";
import { Card } from "../Components/Card";

export const FormularioDePago = () => {
  const { register, formState, handleSubmit, setValue } = useForm();
  useEffect(() => {
    register("name", {
      required: true,
    });

    register("age", {
      required: true,
      min: 18,
      type: "number",
    });

    register("email", {
      required: true,
      pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      type: "email",
    });
  }, [register]);

  const onSubmit = async (form) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
    alert(JSON.stringify(form));
  };

  return (
    <View style={styles.topContainer}>
      <Card>
        {/* Nombre */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Nombre:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setValue("name", text)}
          />
          {formState.errors.name ? (
            <Text style={styles.errorLabel}>
              {formState.errors.name.type === "required"
                ? "Este campo es requerido"
                : ""}
            </Text>
          ) : null}
        </View>
        {/* FIN Nombre */}
        {/* Edad */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Edad:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setValue("age", text)}
          />
          {formState.errors.age ? (
            <Text style={styles.errorLabel}>
              {formState.errors.age.type === "required"
                ? "Este campo es requerido"
                : ""}
              {formState.errors.age.type === "min"
                ? "La edad debe ser mayor a 18"
                : ""}
            </Text>
          ) : null}
        </View>
        {/* FIN Edad */}
        {/* Correo */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Correo:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setValue("email", text)}
          />
          {formState.errors.email ? (
            <Text style={styles.errorLabel}>
              {formState.errors.email.type === "required"
                ? "Este campo es requerido"
                : ""}
              {formState.errors.email.type === "pattern"
                ? "Correo no válido"
                : ""}
            </Text>
          ) : null}
        </View>
        {/* FIN Correo */}
        <ColorableButton
          onPress={handleSubmit(onSubmit)}
        >
          {formState.isSubmitting ? <ActivityIndicator color="white" /> : null}
          <Text style={styles.whiteLabel}>Enviar</Text>
        </ColorableButton>
      </Card>
    </View>
  );
};


const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
  },

  whiteLabel: {
    color: "#fff",
    fontSize: 20,
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputLabel: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    // text input with border and shadow
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    height: 40,
  },
  errorLabel: {
    color: "#ff4444",
    fontSize: 12,
    fontWeight: "bold",
  },
});
