import { StudentsContextProvider } from "./providers/StudentsContextProvider";
import SignUp from "./components/SignUp";
function App() {
  return (
    <>
      <StudentsContextProvider>
        <SignUp />
      </StudentsContextProvider>
    </>
  );
}

export default App;
