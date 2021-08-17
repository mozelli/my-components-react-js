import RoundedInput from "./components/input/RoundedInput";

import "./components/input/global.css";
import EmailIcon from "./components/input/assets/email-icon.svg";

function App() {
  return (
    <div className="App">
      <RoundedInput type="text" label="Usuário" icon={ EmailIcon } size="lg" />
      <RoundedInput type="email" label="Email" icon={ EmailIcon } size="" />
      <RoundedInput type="password" label="Senha" icon={ EmailIcon } size="sm" />
    </div>
  );
}

export default App;
