import "../src/dist/styles.css";
import "../src/dist/index.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import Models from "./Pages/Models";
// import TestimonialsPage from "./Pages/TestimonialsPage";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import SignUp from "./Pages/SignUp";
import Summary from './Pages/Summary';
import Chat from "./Pages/chats";
import Summarize from "./Pages/Summary";



import { onAuthStateChanged } from "firebase/auth";

// import auth from "firebase";
import { auth } from "./firebase";
import ProtectedRoute from "./components/protectedRoute";
import Regi from "./Pages/Regi";
import Private from "./Pages/Private";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetching(false);
        return;
      }

      setUser(null);
      setIsFetching(false);
    });
    return () => unsubscribe();
  }, []);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }


  return (

    <div>
      <Navbar />
      <Routes>
        <Route index path="Regi" element={<Regi user={user}></Regi>}></Route>
        <Route
          path="/Private"
          element={
            <ProtectedRoute user={user}>
              <Private></Private>
            </ProtectedRoute>
          }
        ></Route>
        <Route path="Summarize" element={<Summarize />} />
        <Route path="Chat" element={<Chat />} />

        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        {/* <Route path="form" element={<Form />} /> */}

        {/* <Route path="testimonials" element={<TestimonialsPage />} /> */}
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signUp" element={<SignUp />} />

      </Routes>
    </div>
  );
}

export default App;
