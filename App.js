import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from './src/Home';
import { serverUrl } from './ServerConfig';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const [showHome, setShowHome] = useState(false);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "243243707684-si7mi2airk6vr0fa6a9drb0ug6dqv39m.apps.googleusercontent.com",
    expoClientId: "243243707684-95m4r7rejjtgr2g1sg6l9l4j322glgne.apps.googleusercontent.com",
  });

  useEffect(() => {
    handleEffect();
  }, [response, token]);

  async function handleEffect() {
    const user = await getLocalUser();
    console.log("user", user);
    if (!user) {
      if (response?.type === "success" && !response?.params?.error) {
        getUserInfo(response.authentication.accessToken);
      } else {
        setUserInfo(null);
        AsyncStorage.removeItem("@user");
      }
    } else {
      setUserInfo(user);
      console.log("loaded locally");
    }
  }

  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem("@user");
    if (!data) return null;
    return JSON.parse(data);
  };

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
      saveUserToServer(user); // Guardar usuario en el servidor
      return user;
    } catch (error) {
      // Add your own error handler here
    }
  };

  const saveUserToServer = async (user) => {
    try {
      const response = await fetch(`${serverUrl}/api/datos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const { permissions } = await response.json();
      console.log("Server response:", permissions);
      setUserInfo((prevUser) => ({ ...prevUser, permissions }));
    } catch (error) {
      console.error("Error sending user data to server:", error);
    }
  };

  return (
    <View style={styles.container}>
      {!userInfo ? (
        <View style={styles.containercontainer}>
          <View style={styles.containercontainercontainer}><Image style={styles.image} source={require('./assets/logo_feralum.png')} /></View>

          <TouchableOpacity
            style={styles.button}
            disabled={!request}
            onPress={() => {
              promptAsync();
            }}
          >
            <Text style={styles.buttonText}>Ingresar con Google</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Home userInfo={userInfo} onLogout={() => setUserInfo(null)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 70,
  },
  button: {
    marginTop: 40,
    backgroundColor: "#e8e8e8",
    height: 50,
    width: 300,
    color: "#0b375a",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#0b375a",
    borderWidth: 1,    
  },
  buttonText: {
    color: "#0b375a",
    fontSize: 22, // Ajusta aquí el tamaño del texto
    fontWeight: "bold",
  },
  containercontainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  containercontainercomtainer: {
    width: "100%",
  },
});
