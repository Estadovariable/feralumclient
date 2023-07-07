import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text, Button, Modal, ScrollView, TextInput } from "react-native";
import { serverUrl } from '../ServerConfig';

import Permissions from "./Permissions";
import CreatePlan from "./CreatePlan";
import Plan from "./Plan";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ userInfo, onLogout }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showMenu, setMenu] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null);

  useEffect(() => {
    checkPermissions();
  }, []);

  const checkPermissions = async () => {
    try {
      const response = await fetch(
        `${serverUrl}/api/permissions?email=${userInfo.email}`
      );
      const { isAdmin } = await response.json();
      setIsAdmin(isAdmin);
    } catch (error) {
      console.error("Error checking user permissions:", error);
    }
  };

  const renderPermissionsButton = () => {
    if (isAdmin) {
      return (
        <TouchableOpacity style={styles.touchableButton} onPress={handlePermissions}>
          <View style={styles.button111}>
            <Text style={styles.buttonText11}>Editar permisos</Text>
          </View>
        </TouchableOpacity>
      );
    }
    return null;
  };

  const handlePermissions = () => {
    setActiveComponent("EditarPlan");
  };

  const handleCreatePlan = () => {
    setActiveComponent("CreatePlan");
  };

  const handleViewPlans = () => {
    setActiveComponent("Plan");
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "CreatePlan":
        return <CreatePlan />;
      case "Plan":
        return <Plan />;
      case "EditarPlan":
        return <Permissions userInfo={userInfo} onClose={() => setActiveComponent(null)} />;
      default:
        return null;
    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("@user");
    onLogout();
  };

  return (
    <View style={styles.container}>
      {/* Botón con imagen que despliega menú */}
      <View style={styles.menuButtonContainer}>
        <TouchableOpacity onPress={() => setMenu(true)} style={styles.menuButton}>
          <Image
            source={{ uri: userInfo?.picture }}
            style={styles.menuButtonImage}
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.buttonContainer1}>
          <View style={styles.button1}>
            <TouchableOpacity onPress={handleCreatePlan} style={styles.touchableButton}>
              <Text style={styles.button11}>Crear proceso</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.button2}>
            <TouchableOpacity onPress={handleViewPlans} style={styles.touchableButton}>
              <Text style={styles.button22}>Seguimiento</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Modal visible={showMenu} animationType="fade" transparent={true}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <View style={styles.text11}>
                <Text style={styles.text}>{userInfo.email}</Text>
                <Text style={styles.text}>{userInfo.name}</Text>
              </View>
              {renderPermissionsButton()}
              <TouchableOpacity style={styles.touchableButton} onPress={handleLogout}>
                <View style={styles.button111}>
                  <Text style={styles.buttonText11}>Cerrar sesión</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchableButton} onPress={() => setMenu(false)}>
                <View style={styles.button111}>
                  <Text style={styles.buttonText11}>Cerrar menú</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <ScrollView style={styles.render1}>{renderActiveComponent()}</ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text11: {
    marginBottom: 20,
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff", 
  },
  render1: {
    zIndex: 1,
  },
  buttonContainer1: {
    flexDirection: "row",
    justifyContent: "space-between", 
    position: "absolute",
    top: 50,
    left: 10,
    zIndex: 2,
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 115, 
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonText11: {
    color: "#0b375a",
    fontSize: 20,
    fontWeight: "bold",
  },
  menuButtonContainer: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1, 
  },
  menuButton: {
    padding: 10,
  },
  menuButtonImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  button1: {
    backgroundColor: "#ffd90f",
    height: 40,
    width: 120,
    color: "#0b375a",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
    borderColor: "#0b375a",
    borderWidth: 1,
  },
  button2: {
    backgroundColor: "#ffd90f",
    height: 40,
    width: 120,
    color: "#0b375a",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#0b375a",
    borderWidth: 1,
  },
  button11: {
    color: "#0b375a",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  button111: {
    color: "#0b375a",
    fontSize: 16,
    backgroundColor: "#ffd90f",
    borderRadius: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginTop: 5,
    borderColor: "#0b375a",
    borderWidth: 1,
  },
  button22: {
    color: "#0b375a",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  button3: {
    backgroundColor: "#ffd90f",
    height: 40,
    width: 120,
    color: "#0b375a",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});

export default Home;
