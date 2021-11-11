import React from 'react'
import Blogs from './componenets/Blogs/Blogs'
import Header from './componenets/Header/Header'
import { BrowserRouter } from 'react-router-dom'
import classes from './App.module.css'

const App = () => {
    return (
        <BrowserRouter>
            <div className={classes.Container}>
                <Header />
                <Blogs />
            </div>
        </BrowserRouter>
    )
}

export default App
