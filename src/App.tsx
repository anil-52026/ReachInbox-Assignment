import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import OneBox from "./pages/OneBox"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
        <Route path="/" element={<OneBox/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path = "/signin" element  ={<SignIn/>} />
          <Route path = "/signup" element  ={<SignUp/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
