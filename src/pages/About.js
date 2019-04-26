import React from 'react';
import {Helmet} from "react-helmet";
import Layout from "../layout/Layout";
import styled from 'styled-components';

const Container = styled.div`
	margin: 70px;
	
	@media screen and (max-width: 420px){
		margin: 50px 30px;
	}
`;

const About = () => (
		<Layout>
				<Helmet>
						<title>About | WeFreebies</title>
				</Helmet>
				<div className="container">
						<h1>About</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
								dolore
								magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
								fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
								mollit
								anim id est laborum.</p>
				</div>
		</Layout>
);

export default About
