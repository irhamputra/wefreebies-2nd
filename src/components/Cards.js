import React, {Component} from 'react';
import styled from "styled-components";

const Card = styled.div`
	padding: 10px 20px;
	margin: 20px 20px;
	border: 1px lightgrey solid;
	border-radius: 5px;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-content: center;
	align-items: stretch;
	
	:hover {
		box-shadow: 1px 2px 10px rgba(0,0,0, 0.1);
	}
	
	a {
		text-decoration: none;
	}
`;

export default class Cards extends Component {
		render() {
				const {title, description, uri, imageUri} = this.props;
				return (
						<Card>
								<img width="100" src={imageUri ? imageUri : 'https://braou.ac.in/wp-content/themes/braou/images/noimagefound.jpg'} alt={title}/>
								<h4>{title}</h4>
								<p>{description}</p>
								<a rel="noopener norefferer" target="_blank" href={uri}>
										<button className="btn btn-secondary btn-block">
												Go to page
										</button>
								</a>
						</Card>
				);
		}
}
