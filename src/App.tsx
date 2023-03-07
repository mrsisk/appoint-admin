import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/AdminLayout';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<h1>TODOO Login page</h1>} />
      <Route path="admin" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="bookings" element={<h1>Bookings</h1>} />
        <Route path="schedules" element={<h1>Schedules</h1>} />
        <Route path="users" element={<h1>Users</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
