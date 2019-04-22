import React from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

const Nav = styled.div`
	background-color: white;
	box-shadow: 0 0 1px lightgrey;
	margin: 0;
	padding: 0 4em;
	display: flex;
	align-items: center;
	justify-content: space-between;
	
	a {
		margin-right: 15px;
		color: black;
		text-decoration: none;

		:hover {
			text-decoration: underline;
		}
	}
`;

const NavBrand = styled.h1`
	font-size: 2em;
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
