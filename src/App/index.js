import { TravelProvider } from "../Context";
import { AppUi } from "./AppUi";

// Root styles
import './Index.css'

const App = () => (
  <TravelProvider>
    <AppUi></AppUi>
  </TravelProvider>
);

export default App;