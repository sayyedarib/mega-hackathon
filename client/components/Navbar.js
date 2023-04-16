import React,{useState, useEffect} from 'react'
import styles from '../styles/components/navbar.module.css'
import Link from 'next/link'
const Navbar = () => {
  const [login, setLogin] = useState(false);
  const handleLogout =()=>{
    localStorage.removeItem("user_email");
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_picture");
    setLogin(false)
  }
  useEffect(() => {
    const userEmail = localStorage.getItem("user_email");
    if (userEmail) {
      setLogin(true);
    }
  }, []);

  return (
    <>
      <nav className={styles.main}>
    <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/OrganizeCampaign">Organize</Link></li>
        <li><Link href="/">About Us</Link></li>
        <li><Link href="/">Contact Us</Link></li>
        {login?<li onClick={handleLogout}>LogOut</li>:<li><Link href="/LoginPopup">LogIn</Link></li>}
    </ul>
      </nav>
    </>
  )
}

export default Navbar
