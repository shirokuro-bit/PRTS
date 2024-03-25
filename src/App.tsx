import {loginText, logoBox, logoText1, logoText2, logoText3, mainMenu, window} from "./App.css.ts";
import Authorize from "./assets/announce/Authorize.mp3"
import {setLandscape} from "./components/landscape.ts";

const App = () => {
  const onClickLogin = () => {
    setLandscape();
    new Audio(Authorize).play();
  }
  
  return (
    <div className={window}>
      <div className={mainMenu}>
        <div className={logoBox}>
          <p className={logoText1}>PRTS</p>
          <p className={logoText2}>SYNTHESIZE INFORMATION</p>
          <p className={logoText3}>ANALYSIS OS</p>
        </div>
        <div>
          <p className={loginText} onClick={onClickLogin}>PLEASE LOGIN</p>
        </div>
      </div>
    </div>
  );
};

export default App
