import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";

import Container from "./navigation/NavigationContainer";
import { store } from "./store/store";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <Container />
      </Provider>
    </>
  );
}
