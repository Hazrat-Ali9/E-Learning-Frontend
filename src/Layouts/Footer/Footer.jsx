import React from 'react'
import footerLogo from '../../assets/iSchool-footer.png'

const Footer = () => {
    return (
        <div className="bg-neutral">
            <footer className="footer text-neutral-content p-10 container py-20 text-lg">
                <div>
                    <img src={footerLogo} alt="logo" />
                </div>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Courses</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    )
}

export default Footer
