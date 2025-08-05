import React from 'react'
import { Container } from "./index.js"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

const Header = () => {
    const navigate = useNavigate()
    const navItems = [
        {
            name: 'Home',
            slug: '/',
        },
        {
            name: "Add-Blog",
            slug: '/create'
        },
        {
            name: "All-Blogs",
            slug: "/blogs"
        }
    ]
    return (
        <header className='bg-slate-900'>
            <Container>
                <nav className='flex items-center justify-between'>
                    <div className="logo py-1">
                        <Link to='/'>
                            <Logo />
                        </Link>
                    </div>
                    <ul className='list-none flex gap-10'>
                        {navItems.map((items) => {
                            return (
                                <li key={items.name}>
                                    <button onClick={() => navigate(items.slug)} className='text-white hover:bg-gray-700 px-2 py-1 rounded-full cursor-pointer'>{items.name}</button>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header
