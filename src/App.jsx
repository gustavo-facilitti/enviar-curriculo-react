import "./App.scss";

//Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import ListResumes from "./pages//ListResumes/ListResumes";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import LoginPage from "./pages/LoginPage/LoginPage";

//toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer autoClose={5000} />
        <div className="app-container">
          <Header />
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/resumes" element={<ListResumes />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
