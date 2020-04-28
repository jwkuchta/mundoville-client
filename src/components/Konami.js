import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
// import useHotKey from "./useHotKey";

const createKeyChecker = (hotkeys = []) => {
    let index = 0;
    const TAIL = hotkeys.length - 1;
  
    return key => {
      if (key !== hotkeys[index]) {
        index = 0;
        return false;
      }
  
      if (index === TAIL) {
        index = 0;
        return true;
      }
  
      index++;
      return false;
    };
  };
  
  function useHotKey(hotKeys, onMatch) {
    const keyCrawler = React.useMemo(() => createKeyChecker([].concat(hotKeys)), [
      hotKeys
    ]);
  
    const listen = ({ key }) => {
      if (keyCrawler(key)) {
        onMatch();
      }
    };
  
    React.useEffect(() => {
      window.addEventListener("keydown", listen);
      return () => window.removeEventListener("keydown", listen);
    });
  }

const AppWrapper = styled.div`
  padding: 2rem;
  font-family: sans-serif;
  text-align: center;
`;

const BigButton = styled.button`
  padding: 1rem;
  color: white;
  background: dodgerblue;
  border: 1px solid navy;
  border-radius: 0.5rem;
`;

const sequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
  "Enter"
];

export const Konami = () => {
  const [keysPressed, setKeysPress] = React.useState(false);
  useHotKey(sequence, () => setKeysPress(true));

  return (
    keysPressed && (
      <div>
        <h1>You hit the Konami Code</h1>
        <BigButton onClick={() => setKeysPress(false)}>Reset Code</BigButton>
      </div>
    )
  );
};

function App() {
  const [showKonami, setShow] = React.useState(false);
  const BtnRef = React.useRef(null);
  return (
    <AppWrapper>
      <div>
        <BigButton
          ref={BtnRef}
          onClick={() => {
            setShow(!showKonami);
            BtnRef.current.blur();
          }}
        >
          Turn {showKonami ? "off" : "on"} Konami
        </BigButton>
      </div>
      {showKonami && <Konami />}
    </AppWrapper>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);