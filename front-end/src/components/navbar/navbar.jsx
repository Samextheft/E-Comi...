import React, { useState , useEffect} from 'react'
import carticon from "../assets/carticon.png"
import { Link } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
      const [menu,setMenu] = useState("shop");
      const [user, setUser] = useState(null);

      useEffect(()=>{
        const storedUser = localStorage.getItem("user");
        if(storedUser&& storedUser !== "undefined"){
          try{
            setUser(JSON.parse(storedUser));}
            catch(error){
              console.log("Error in stored user data:", error);
              localStorage.removeItem("user");
            }
        }
      },[])
      const [show, setShow] = useState(true);
      const [lastScrollY, setLastScrollY] = useState(0);  

      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > lastScrollY) {
            setShow(false);
          } else {
            setShow(true);
          }

          setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
      }, [lastScrollY]);
  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary fixed-top ${show ? "nav-visible" :"nav-hidden"}`}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className='navbar-brand' to="/">E-Commi</Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li onClick={()=>{setMenu("shop")}} className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Shop</Link>
            </li>
            <li onClick={()=>{setMenu("mens")}} className="nav-item">
              <Link className='nav-link' to ="/category/mens">Men</Link>
            </li>
            <li onClick={()=>{setMenu("womens")}} className="nav-item">
              <Link className='nav-link' to ="/category/womens">Women</Link>
            </li>
            <li onClick={()=>{setMenu("kids")}} className="nav-item">
              <Link className='nav-link' to ="/category/kids">Kids</Link>
            </li>
          </ul>
          {user?(
            <>
            <span className="mx-3">Hi!, {user.name}</span>
            <button className="btn btn-outline-danger" onClick={()=>{
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              setUser(null);
            }}>Logout</button>
            </>
          )
          :(
            <Link to ="/login"><button className="btn btn-outline-success" type="login">Login</button></Link>)}          
          <form className="d-flex" role="search">
            <Link to ="/cart"><img src={carticon} alt="cart"  style={{ width: "30px", cursor: "pointer" }}/></Link>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
