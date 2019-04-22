import React from 'react';
import styled from "styled-components";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Container = styled.section`
   margin: 0;
   font-family: Roboto,serif;
`;

const Layout = props => (
		<Container>
				<Navigation/>
				{props.children}
				<Footer/>
		</Container>
);

export default Layout
