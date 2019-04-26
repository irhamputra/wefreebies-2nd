import React from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

const Nav = styled.div`
	margin: 0;
	padding: 1.5em 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	
	@media screen and (max-width: 420px){
		flex-wrap: wrap;
		padding: 30px 40px 30px 40px;
	}
	
	a {
		margin-right: 50px;
		color: #0F2027;
		text-decoration: none;
		
		:last-child {
			margin-right: 0;
		}

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
				<div className="container">
						
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
				</div>
		
		)
};

export default Navigation;
