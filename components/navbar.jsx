import React, { useState } from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  const [open,setOpen] = useState(false)
  return (
    <div className={styles.container}>
        <Link href="/">THE PURPLE ORCHID</Link>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href="/about"><a>ABOUT</a></Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/rooms"><a>ROOMS</a></Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/services"><a>SERVICES</a></Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/contact"><a>CONTACT</a></Link>
          </li>
        </ul>
          <div className={styles.Hamburger} onClick={() => setOpen(!open)}>
          <div className={styles.line}/>
          <div className={styles.line}/>
          <div className={styles.line}/>
        </div>
        <ul onClick={() => setOpen(false)} className={styles.menu} style={{right: open ? "0px" : "-50vw"}}>
          <li className={styles.menuItem}>
            <Link href="/about">ABOUT</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/rooms"><a>ROOMS</a></Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/services"><a>SERVICES</a></Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/contact"><a>CONTACT</a></Link>
          </li>
        </ul>
    </div>
  )
}

export default Navbar
