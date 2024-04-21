import "./App.css";
import "@mantine/core/styles.css";
import "@mantinex/mantine-logo/styles.css";
import "@mantine/carousel/styles.css";
import Home from "./page/Home";
import { createTheme, MantineProvider } from "@mantine/core";
import { Route, Routes, BrowserRouter, json } from "react-router-dom";
import Prepare from "./page/Prepare";
import Disaster from "./page/Disaster";
import { Provider } from "react-redux";
import { store, persistor } from "./_store/store";
import { PersistGate } from "redux-persist/integration/react";
import ButtonEmergency from "./components/common/ButtonEmergency";
import News from "./page/News";
import Login from "./page/Login";
import Register from "./page/Register";
import QuickPreparation from "./page/QuickPreparation";
import AdminModal from "./components/common/AdminMessage";
import SocketProvider from "./providers/SocketProvider";
import Forum from "../../client/src/page/Forum";

function App() {
  const theme = createTheme({
    breakpoints: {
      xs: "30em",
      sm: "48em",
      md: "64em",
      lg: "74em",
      xl: "90em",
    },
  });

  return (
    <>
      <Provider store={store}>
        <SocketProvider>
          <PersistGate loading={null} persistor={persistor}>
            <MantineProvider theme={theme}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/preparedness" element={<Prepare />} />
                  <Route path="/preparedness/:any" element={<Disaster />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route
                    path="/quickpreparation"
                    element={<QuickPreparation />}
                  />
                  <Route path="/forum" element={<Forum />} />
                </Routes>
              </BrowserRouter>
              <AdminModal />
              <ButtonEmergency />
            </MantineProvider>
          </PersistGate>
        </SocketProvider>
      </Provider>
    </>
  );
}

export default App;
