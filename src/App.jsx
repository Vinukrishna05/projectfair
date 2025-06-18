import { Route, Routes } from 'react-router-dom'
import './bootstrap.min.css'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import Header from './components/Header'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} ></Route>
        <Route path='/dash' element={<Dashboard />} ></Route>
        <Route path='/auth' element={<Auth />} ></Route>
        <Route path='/allproject' element={<Projects />} ></Route>
        <Route path='*' element={<NotFound />} ></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
