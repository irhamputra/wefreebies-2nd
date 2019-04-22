import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

import Layout from "../layout/Layout";
import {dataList} from "../data/data";

const Container = styled.section`
	margin: auto 50px;
	display: grid;
	grid-template-columns: auto auto auto;
`;

class Home extends Component {
		onRenderList = () => {
				return dataList.map(({id, title, path, icon}) => {
						return <li key={id}>
								<h3>{title}</h3>
								<Link to={`c/${path}`}>Go to categories</Link>
						</li>
				})
		};
		
		render() {
				return (
						<Layout>
								<Helmet>
										<title>Home | WeFreebies</title>
								</Helmet>
								<Container>
										<ul>
												{this.onRenderList()}
										</ul>
								</Container>
						</Layout>
				);
		}
}

export default Home;
