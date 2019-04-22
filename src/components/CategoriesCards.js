import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const CategoriesContainer = styled.div`
	object-fit: contain;
	height: 300px;
	padding: 20px;
	margin: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	text-align: center;
`;

const Title = styled.h1`
	text-align: center;
	color: white;
	font-size: 20px;
`;

const ImageContainer = styled.img`
	display: block;
	margin: 0 auto;
	width: 100px;
`;

const CategoriesCards = ({title, path, icon, imgUri}) => (
		<Link style={{'text-decoration':'none'}} to={`c/${path}`}>
				<CategoriesContainer style={{'background': `url(${imgUri}) center center`}}>
						<ImageContainer src={icon} alt={icon}/>
						<Title>{title}</Title>
				</CategoriesContainer>
		</Link>
);

export default CategoriesCards;
