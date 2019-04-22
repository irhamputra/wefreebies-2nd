import React, {Component} from 'react';
import styled from "styled-components";

const Card = styled.div`
	padding: 10px 20px;
	margin: 20px 20px;
	border: 1px lightgrey solid;
	border-radius: 5px;
	background-color: white;
	
	:hover {
		box-shadow: 1px 2px 10px rgba(0,0,0, 0.1);
	}
`;

export default class Cards extends Component {
		render() {
				const {title, description, uri, imageUri} = this.props;
				return (
						<Card>
								<img src={imageUri} alt={title}/>
								<h2>{title}</h2>
								<p>{description}</p>
								<button>
										<a target="_blank" href={uri}>Go to page</a>
								</button>
						</Card>
				);
		}
}
