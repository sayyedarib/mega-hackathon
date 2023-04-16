import React from 'react'
import styles from '../styles/components/navbar.module.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <>
      <nav className={styles.main}>
    <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/">Organize</Link></li>
        <li><Link href="/">About Us</Link></li>
        <li><Link href="/">Contact Us</Link></li>
        <li><Link href="/LoginPopup">LogIn</Link></li>
    </ul>
      </nav>
    </>
  )
}

export default Navbar
