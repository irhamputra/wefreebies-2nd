import React from 'react';
import Layout from "../layout/Layout";

const Categories = ({match}) => (
	<Layout>
		<h1>Categories: {match.params.slug}</h1>
	</Layout>
);

export default Categories;
