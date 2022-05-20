import { NextPage } from "next";
import Head from "next/head";
import { FourFeatures } from "../../src/components/molecules";
import { Animation } from "../../src/templates";

const FourFeaturesPage:NextPage = () => {
	return (
		<div className='page-container'>
		<Head>
			<title>Four Features | Framer Animation</title>
		</Head>
		<Animation text='Flower of Life Animation' >
			<FourFeatures />
		</Animation>
	</div>
	)
}

export default FourFeaturesPage;