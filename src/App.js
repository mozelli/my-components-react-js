import RoundedInput from "./components/input/RoundedInput";

import "./components/input/global.css";
import EmailIcon from "./components/input/assets/email-icon.svg";
import LockIcon from "./components/input/assets/lock-icon.svg";

function App() {
  return (
    <div className="App">
      <RoundedInput type="text" label="Usuário" size="sm" />
      <RoundedInput type="email" label="E-mail" icon={ EmailIcon } size="lg" />
      <RoundedInput type="password" label="Senha" icon={ LockIcon } />
    </div>
  );
}

export default App;
