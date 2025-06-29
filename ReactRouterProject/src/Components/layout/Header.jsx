import { NavLink } from "react-router-dom"

export const Header = () => {
    return (<>
        <header className="section-navbar">
            <section className="top-txt">
                <div className="head container">
                    <div className="head-txt">
                        <p>Get Thapa MemberShip, 30-day return or refund guarantee</p>
                    </div>
                    <div className="sign_in_up">
                        <NavLink to="#">SIGN IN</NavLink>
                        <NavLink to="#">SIGN UP</NavLink>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="navbar-brand">
                    <NavLink to="index">
                        <p>ThapaFlix</p>
                    </NavLink> 
                </div>

                <nav className="navbar">
                    <ul>
                        <li className="nav-item">
                            <NavLink  to="/" className="nav-link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">
                                Movies
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </>)
}