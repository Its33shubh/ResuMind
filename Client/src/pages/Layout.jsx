import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <h1>Layout page</h1>
            <div>
                <Outlet/>
            </div>
        </>
    )
}

export default Layout
