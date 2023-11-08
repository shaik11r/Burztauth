import { StudentsContextProvider } from "./providers/StudentsContextProvider";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
function App() {
  return (
    <>
      <StudentsContextProvider>
        <Home />
        <SignIn />
      </StudentsContextProvider>
    </>
  );
}

export default App;
