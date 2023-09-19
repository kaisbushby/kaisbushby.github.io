import App from 'App'
import { ContactsPage } from 'components/Contacts Page/ContactsPage'
import { ErrorPage } from 'components/Error Page/ErrorPage'
import { MainPage } from 'components/Main Page/MainPage'
import { ProjectsPage } from 'components/Project Page/ProjectsPage'
import * as React from 'react'
import { Routes, Route } from 'react-router-dom'

export const Routing = () => {
    return(
        <Routes>
            <Route path='*' element={<ErrorPage/>}/>
            <Route element={<App/>}>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/projects'} element={<ProjectsPage/>}/>
                <Route path={'/contacts'} element={<ContactsPage/>}/>
            </Route>
        </Routes>
    )
}