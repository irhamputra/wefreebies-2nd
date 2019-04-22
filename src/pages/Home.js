import React, {Component} from 'react';
import styled from 'styled-components';
import {Helmet} from "react-helmet";

import Layout from "../layout/Layout";
import {dataList} from "../data/data";
import CategoriesCards from "../components/CategoriesCards";

const Container = styled.section`
	margin: auto 50px;
	display: grid;
	grid-template-columns: auto auto auto;
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
								<Container>
										{this.onRenderList()}
								</Container>
						</Layout>
				);
		}
}

export default Home;
