import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Navbar from './Navbar';
import Ref from './ref';
import Context from "./context";
import Memo from './memo';
import Callback from "./callback";
import Reducer from './reducer';
import Custom from "./custom";
import More from "./more";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div
          style={{
            padding: "50px",
            margin: "80px",
            height: "100vh",
            backgroundColor: "blanchedalmond",
            borderRadius: "30px",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ref" element={<Ref />} />
            <Route path="/context" element={<Context />} />
            <Route path="/memo" element={<Memo />} />
            <Route path="/callback" element={<Callback />} />
            <Route path="/reducer" element={<Reducer />} />
            <Route path="/custom" element={<Custom />} />
            <Route path="/more" element={<More />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
