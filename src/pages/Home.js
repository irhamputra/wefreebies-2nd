import React, {Component} from 'react';
import styled from 'styled-components';
import {Helmet} from "react-helmet";

import Layout from "../layout/Layout";
import {dataList} from "../data/data";
import CategoriesCards from "../components/CategoriesCards";
import Hero from "../components/Hero";

const Container = styled.section`
	margin: 20px 105px;
	display: grid;
	grid-template-columns: auto auto auto;
	
	@media screen and (max-width: 769px){
		margin: -100px 30px 30px 30px;
	}
	
	@media screen and (max-width: 420px){
		margin: -70px 20px 20px 20px;
		display: block;

	}
	
	
`;

class Home extends Component {
		onRenderList = () => {
				return dataList.map(({id, title, path, icon, imgUri}) => {
						return <CategoriesCards key={id} title={title} path={path} icon={icon} imgUri={imgUri}/>
				})
		};
		
		render() {
				return (
						<Layout>
								<Helmet>
										<title>Home | WeFreebies</title>
								</Helmet>
								<Hero/>
								<div className="container mt-5">
										<h2>Categories</h2>
										<p className="text-muted small">Resources field</p>
								</div>
								<Container>
										{this.onRenderList()}
								</Container>
						</Layout>
				);
		}
}

export default Home;
