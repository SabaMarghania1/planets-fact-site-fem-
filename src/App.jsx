import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Planets from "./pages/Planets"



function App() {
  


  return (
    <BrowserRouter>
      <Routes>
        <Route path="planets/:name" element={<Planets/>}/>
        <Route path="/" element={<Navigate to="/planets/earth" />} />
        <Route path="*" element={<h1>Page Not Found</h1>}/>
      </Routes>

    
    </BrowserRouter>

  )
}

export default App
