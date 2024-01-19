import App from 'App'
import { WorksPage } from 'Components/Works Page/WorkPage'
import { ErrorPage } from 'Components/Error Page/ErrorPage'
import { MainPage } from 'Components/Main Page/MainPage'
import { ProjectsPage } from 'Components/Project Page/ProjectsPage'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from 'Components/Shared/Navbar'


export const Routing = () => {
    const location = useLocation();
    return (
        <>
            <Navbar />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route element={<App />}>
                        <Route path={'/'} element={<MainPage />} />
                        <Route path={'/projects'} element={<ProjectsPage />} />
                        <Route path={'/work'} element={<WorksPage />} />
                        <Route path='*' element={<ErrorPage />} />
                    </Route>
                </Routes>
            </AnimatePresence>
        </>
    )
}