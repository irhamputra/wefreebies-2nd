import React from 'react';
import styled from "styled-components";
import {Helmet} from "react-helmet";

import Layout from "../layout/Layout";
import Cards from "../components/Cards";

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
	margin: 20px 105px;
	display: grid;
	grid-template-columns: auto auto auto;
	
	@media screen and (max-width: 420px){
		display: block;
		margin: -60px 20px 10px 20px;
	}
`;

const CategoriesTitle = styled.div`
	padding: 80px 0;
	background: linear-gradient(to right, #0F2027, #203A43, #2C5364);
	color: white;
	border-radius: 10px;
`;

export default class Categories extends React.Component {
		onRenderList = () => {
				// get data and map here
				const {slug} = this.props.match.params;
				
				if (slug === "photography") {
						return photographyData.map(({id, title, description, uri, imageUri}) => {
								return <Cards key={id} title={title} description={description} uri={uri} imageUri={imageUri}/>
						})
				}
				
				if (slug === "mockups") {
						return mockupsData.map(({id, title, description, uri, imageUri}) => {
								return <Cards key={id} title={title} description={description} uri={uri} imageUri={imageUri}/>
						})
				}
				
				if (slug === "graphics") {
						return graphicsData.map(({id, title, description, uri, imageUri}) => {
								return <Cards key={id} title={title} description={description} uri={uri} imageUri={imageUri}/>
						})
				}
				
				if (slug === "textures") {
						return texturesData.map(({id, title, description, uri, imageUri}) => {
								return <Cards key={id} title={title} description={description} uri={uri} imageUri={imageUri}/>
						})
				}
				
				if (slug === "fonts") {
						return fontsData.map(({id, title, description, uri, imageUri}) => {
								return <Cards key={id} title={title} description={description} uri={uri} imageUri={imageUri}/>
						})
				}
				
				if (slug === "colours") {
						return coloursData.map(({id, title, description, uri, imageUri}) => {
								return <Cards key={id} title={title} description={description} uri={uri} imageUri={imageUri}/>
						})
				}
				
				if (slug === "video") {
						return videoData.map(({id, title, description, uri, imageUri}) => {
								return <Cards key={id} title={title} description={description} uri={uri} imageUri={imageUri}/>
						})
				}
				
				if (slug === "tools") {
						return toolsData.map(({id, title, description, uri, imageUri}) => {
								return <Cards key={id} title={title} description={description} uri={uri} imageUri={imageUri}/>
						})
				}
		};
		
		capitalizeLetter = (slug) => {
				return slug.charAt(0).toUpperCase() + slug.slice(1)
		};
		
		render() {
				const {slug} = this.props.match.params;
				return (
						<Layout>
								<Helmet>
										<title>{this.capitalizeLetter(slug)} | WeFreebies</title>
								</Helmet>
								<div className="container">
										<CategoriesTitle>
												<h1 style={{'text-align': 'center'}}>{slug.toUpperCase()}</h1>
										</CategoriesTitle>
								</div>
								<Container>
										{this.onRenderList()}
								</Container>
						</Layout>
				)
		}
}
