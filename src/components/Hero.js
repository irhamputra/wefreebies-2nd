import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
	background: linear-gradient(to right, #0F2027, #203A43, #2C5364);
	color: white;
	margin: 0;
	padding: 70px;
	height: 400px;
	
	@media screen and (max-width: 768px){
		height: 450px;
		padding: 50px;
	}
	
	@media screen and (max-width: 414px){
		height: 600px;
		padding: 40px;
	}
`;

const Title = styled.h1`
	font-size: 38px;
	font-weight: 400;
`;

const Hero = () => (
		<HeroContainer>
				<Title>
						A hand picked directory of the best free
						<br/>resources for creative, because we love a free stuff 🖤
				</Title>
				<hr/>
				<h2 style={{'text-align': 'center', 'margin-top': '80px'}}>Categories</h2>
		</HeroContainer>
);

export default Hero
