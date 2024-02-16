import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/css/dashlite.css'
import './assets/css/theme.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Employee from './pages/Employee'
import EmployeeAdd from './pages/EmployeeAdd'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/employee-add" element={<EmployeeAdd />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
