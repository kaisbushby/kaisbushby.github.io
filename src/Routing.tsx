import App from 'App'
import { ContactsPage } from 'components/Contacts Page/ContactsPage'
import { ErrorPage } from 'components/Error Page/ErrorPage'
import { MainPage } from 'components/Main Page/MainPage'
import { ProjectsPage } from 'components/Project Page/ProjectsPage'
import * as React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

export const Routing = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='*' element={<ErrorPage />} />
                <Route element={<App />}>
                    <Route path={'/'} element={<MainPage />} />
                    <Route path={'/projects'} element={<ProjectsPage />} />
                    <Route path={'/contact'} element={<ContactsPage />} />
                </Route>
            </Routes>
        </AnimatePresence>
    )
}