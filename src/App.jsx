import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { DataProvider } from './context/DataContext'

const App = () => {
    return (
        <Router>
            <DataProvider>
                <AppRoutes />
            </DataProvider>
        </Router>
    )
}

export default App