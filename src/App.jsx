import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.page.jsx';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>
          React
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            height="30"
          />
        </h1>

        <BrowserRouter>
          <Routes>
            <Route path="/react" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;


class Mfe4Element extends HTMLElement {
  connectedCallback() {
    const reactRootElement = document.getElementsByTagName("react-root")[0];
    reactRootElement.id = "react-root-element";
    const container = document.getElementById("react-root-element");
    console.log('Found container:', container);
    const root = ReactDOMClient.createRoot(container);
    root.render(<App />);
  }
}

customElements.define("react-root", Mfe4Element);

