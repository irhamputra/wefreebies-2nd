import React, {Component} from 'react';
import Layout from "../layout/Layout";
import styled from 'styled-components';
import Cards from "../components/Cards";
import {PhotographyData} from "../Data/data";

const Container = styled.section`
	margin: auto 50px;
	display: grid;
	grid-template-columns: auto auto auto;
`;

class Home extends Component {
	onRenderList() {
		return PhotographyData.map(({id, title, description, uri, imageUri}) => (
			<Cards key={id} title={title} description={description} uri={uri} imgUri={imageUri} />
		))
	}
	
	render() {
		return (
			<Layout>
				<Container>
					{this.onRenderList()}
				</Container>
			</Layout>
		);
	}
}

export default Home;
