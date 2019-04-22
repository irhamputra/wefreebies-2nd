import React from 'react';
import Layout from "../layout/Layout";
import Cards from "../components/Cards";
import styled from "styled-components";

// Data
// TODO: Create dynamic data CMS built in or Contentful or Hasura
import {
		photographyData,
		coloursData,
		fontsData,
		graphicsData,
		mockupsData,
		texturesData,
		toolsData,
		videoData
} from "../data/data";

const Container = styled.section`
	margin: auto 50px;
	display: grid;
	grid-template-columns: auto auto auto;
`;

export default class Categories extends React.Component {
		onRenderList = () => {
				// get data and map here
				const {slug} = this.props.match.params;
				
				if (slug === "photography") {
						return photographyData.map(({id, title, description, uri, imgUri}) => {
								return <Cards key={id} title={title} description={description} uri={uri} imgUri={imgUri}/>
						})
				}
				
				if (slug === "mockups") {
						return mockupsData.map(({id, title, description, uri, imgUri}) => {
								return <Cards key={id} title={title} description={description} uri={uri} imgUri={imgUri}/>
						})
				}
				
				if (slug === "graphics") {
						return graphicsData.map(({id, title, description, uri, imgUri}) => {
								return <Cards key={id} title={title} description={description} uri={uri} imgUri={imgUri}/>
						})
				}
				
				if (slug === "textures"){
						return texturesData.map(({id, title, description, uri, imgUri}) => {
								return <Cards key={id} title={title} description={description} uri={uri} imgUri={imgUri}/>
						})
				}
				
				if (slug === "fonts") {
						return fontsData.map(({id, title, description, uri, imgUri}) => {
								return <Cards key={id} title={title} description={description} uri={uri} imgUri={imgUri}/>
						})
				}
				
				if (slug === "colours") {
						return coloursData.map(({id, title, description, uri, imgUri}) => {
								return <Cards key={id} title={title} description={description} uri={uri} imgUri={imgUri}/>
						})
				}
				
				if (slug === "video") {
						return videoData.map(({id, title, description, uri, imgUri}) => {
								return <Cards key={id} title={title} description={description} uri={uri} imgUri={imgUri}/>
						})
				}
				
				if (slug === "tools") {
						return toolsData.map(({id, title, description, uri, imgUri}) => {
								return <Cards key={id} title={title} description={description} uri={uri} imgUri={imgUri}/>
						})
				}
		};
		
		render() {
				return (
						<Layout>
								<h1 style={{'text-align': 'center'}}>{this.props.match.params.slug.toUpperCase()}</h1>
								<Container>
										{this.onRenderList()}
								</Container>
						</Layout>
				)
		}
}
