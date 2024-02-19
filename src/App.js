import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/css/dashlite.css'
import './assets/css/theme.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Employee from './pages/Employee'
import EmployeeAdd from './pages/EmployeeAdd'
import Country from './pages/Country'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/employee-add" element={<EmployeeAdd />} />
        <Route path="/country" element={<Country />} />
        
      </Routes>
    </BrowserRouter>
  )
}
export default App
