import App from 'App'
import { ContactsPage } from 'Components/Contacts Page/ContactsPage'
import { ErrorPage } from 'Components/Error Page/ErrorPage'
import { MainPage } from 'Components/Main Page/MainPage'
import { ProjectsPage } from 'Components/Project Page/ProjectsPage'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

export const Routing = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                
                <Route element={<App />}>
                    
                    <Route path={'/'} element={<MainPage />} />
                    <Route path={'/projects'} element={<ProjectsPage />} />
                    <Route path={'/contact'} element={<ContactsPage />} />
                    <Route path='*' element={<ErrorPage />} />
                </Route>
            </Routes>
        </AnimatePresence>
    )
}