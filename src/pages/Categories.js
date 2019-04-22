import React from 'react';
import Layout from "../layout/Layout";
import Cards from "../components/Cards";
import styled from "styled-components";

import {PhotographyData} from "../Data/data";

const Container = styled.section`
	margin: auto 50px;
	display: grid;
	grid-template-columns: auto auto auto;
`;

export default class Categories extends React.Component {
		onRenderList = () => {
				// get data and map here
				return PhotographyData.map(({id, title, description, uri, imgUri}) => {
						return <Cards key={id} title={title} description={description} uri={uri} imgUri={imgUri}/>
				})
		};
		
		render() {
				return (
						<Layout>
								<h1>Categories: {this.props.match.params.slug}</h1>
								<Container>
										{this.onRenderList()}
								</Container>
						</Layout>
				)
		}
}
