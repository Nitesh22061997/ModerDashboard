import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Leftbar";
import Bar from "./scenes/bar";
import Notes from "./scenes/notes";
import Wallet from "./scenes/wallet";
import Shop from "./scenes/shop";


function App() {

  const [theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <div className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/charts" element={<Bar />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/shop" element={<Shop />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
