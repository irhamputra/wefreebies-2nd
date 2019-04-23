import React from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

const Nav = styled.div`
	background: linear-gradient(to right, #0F2027, #203A43, #2C5364);
	margin: 0;
	padding: 0 4em;
	display: flex;
	align-items: center;
	justify-content: space-between;
	
	@media screen and (max-width: 420px){
		flex-wrap: wrap;
		padding: 0 40px 30px 40px;
	}
	
	a {
		margin-right: 50px;
		color: white;
		text-decoration: none;

		:hover {
		font-weight: 600;
		}
	}
`;

const NavBrand = styled.h1`
	font-size: 2em;
	
	a:hover {
		text-decoration: none;
	}
	
	@media screen and (max-width: 420px){
		text-align: center;
	}
`;

const Navigation = () => {
		return (
				<Nav>
						<NavBrand>
								<NavLink to="/">WeFreebies</NavLink>
						</NavBrand>
						<div>
								<NavLink to="/">Home</NavLink>
								<NavLink to="/about">About</NavLink>
								<a href="https://github.com/irhamputra/wefreebies-2nd" target="_blank">Contribute</a>
						</div>
				</Nav>
		)
};

export default Navigation;
