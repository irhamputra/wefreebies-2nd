import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
	background: linear-gradient(to right, #0F2027, #203A43, #2C5364);
	color: white;
	margin: 0;
	padding: 70px;
	border-radius: 10px;
	
	@media screen and (max-width: 768px){
		padding: 50px;
	}
	
	@media screen and (max-width: 414px){
		padding: 40px;
	}
`;

const Title = styled.h1`
	font-size: 38px;
	font-weight: 400;
`;

const Hero = () => (
		<div className="container">
				<HeroContainer>
						<Title>
								A hand picked directory of the best free
								<br/>resources for creative, because we love a free stuff 🖤
						</Title>
						<p>High quality resources curated by the professional in graphic designer, video maker and animator</p>
				</HeroContainer>
		</div>

);

export default Hero
