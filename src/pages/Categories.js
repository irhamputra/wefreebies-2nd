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
				const slug = this.props.match.params.slug;
				if (slug === "photography") {
						return PhotographyData.map(({id, title, description, uri, imgUri}) => {
								return <Cards key={id} title={title} description={description} uri={uri} imgUri={imgUri}/>
						})
				}
				
				if (slug === "mockups"){
						return <h1>Mockups list here</h1>
				}
				
				if (slug === "graphics"){
						return <h1>Graphics list here</h1>
				}
				
				if (slug === "fonts"){
						return <h1>Fonts list here</h1>
				}
				
				if (slug === "colours"){
						return <h1>Colours list here</h1>
				}
				
				if (slug === "video"){
						return <h1>Video list here</h1>
				}
				
				if (slug === "audio"){
						return <h1>Audio list here</h1>
				}
				
				if (slug === "tools"){
						return <h1>Tools list here</h1>
				}
				
				if (slug === "graphics"){
						return <h1>Graphics list here</h1>
				}
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
