import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Layout from './pages/Layout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ResumeBuilder from './pages/ResumeBuilder.jsx'
import Preview from './pages/Preview.jsx'
import Login from './pages/Login.jsx' 

 let MyApp=()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
         <Route path='view/:resumeID' element={<Preview/>}/> 
          <Route path='app' element={<Layout/>}>
              <Route index element={<Dashboard/>}/>
              <Route path='builder/:resumeID' element={<ResumeBuilder/>}/>
          </Route>

      </Routes>
  </BrowserRouter>
  );
 }
createRoot(document.getElementById('root')).render(
 <MyApp/>
)
