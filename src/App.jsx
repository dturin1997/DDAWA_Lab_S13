import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import Router from "./routes";
import "./App.css"

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      
      <Router />
      
    </ThemeProvider>
    
  );
}

export default App;
