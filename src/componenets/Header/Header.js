import React from 'react'
import classes from './Header.module.css'

const Header = () => {
    
    // const items = [{'Home':'/'},{'Create Post':'/'},{'About':'/'}]
    // const links = items.map((item, index) => <li key={index}><a href={item[Object.keys(item)]}>{Object.keys(item)}</a></li>)
    
    return (
        <header className={classes.Header}>
            <nav>
                <ul>
                    {/* {links} */}
                    <li><a href='/' active>Home</a></li>
                    <li><a href='/'>Create Post</a></li>
                    <li><a href='/'>About</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
