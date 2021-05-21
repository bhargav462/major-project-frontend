import React from 'react';
import classes from './Footer.module.css'

const Footer = () => {
    return(<>
            <footer className={classes["footer-distributed"]}>
			<div className={classes["footer-left"]}>
				<h3>E-coF</h3>
				<p className={classes["footer-links"]}>
					<a href="/" className={classes["link-1"]}>Home</a>
					<a href="/products">Products</a>
					<a href="/news">News</a>
					<a href="/about">About</a>
					<a href="/contact">Contact</a>
				</p>
				<p className={classes["footer-company-name"]}>Company Name © 2021</p>
			</div>
			<div className={classes["footer-center"]}>
				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>NIT</span> Jalandhar, Punjab</p>
				</div>
				<div>
					<i class="fa fa-phone"></i>
					<p>+91 9999999999</p>
				</div>
				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@company.com</a></p>
				</div>
			</div>
			<div className={classes["footer-right"]}>
				<p className={classes["footer-company-about"]}>
					<span>About the company</span>
                    It is an e-commerce website to provide a direct communication between the farmers and the buyers by removing the 3rd parties
				</p>
				<div className={classes["footer-icons"]}>
					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>
				</div>
			</div>
		</footer>
    </>)
}

export default Footer;