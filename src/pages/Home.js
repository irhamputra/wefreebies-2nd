import React, {Component} from 'react';
import Layout from "../layout/Layout";
import styled from 'styled-components';
import {dataList} from "../data/data";
import {Link} from "react-router-dom";

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
