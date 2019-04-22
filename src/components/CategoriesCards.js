import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const CategoriesContainer = styled.div`
	background: white;
	height: 300px;
	padding: 20px;
	margin: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	text-align: center;
	border-radius: 7px;
	
	:hover{
		box-shadow: 0 0 15px rgba(0,0,0, 0.3);
	}
`;

const Title = styled.h1`
	text-align: center;
	color: gray;
	font-size: 20px;
`;

const ImageContainer = styled.img`
	display: block;
	margin: 0 auto;
	width: 100px;
`;

const CategoriesCards = ({title, path, icon}) => (
		<Link style={{'text-decoration':'none'}} to={`c/${path}`}>
				<CategoriesContainer>
						<ImageContainer src={icon} alt={icon}/>
						<Title>{title}</Title>
				</CategoriesContainer>
		</Link>
);

export default CategoriesCards;
