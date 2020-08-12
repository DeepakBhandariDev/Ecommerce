import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Card from './Card';
import { getCategories } from './apiCore';

const Shop = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);

  // Load categories and set form data
	const init = () => {
		getCategories().then((data) => {
			if (data.error) {
				setError(data.error);
			} else {
				setCategories(data);
			}
		});
	};

	useEffect(() => {
		init();
	}, []);
  
	return (
		<Layout
			title='Shop Page'
			description='Search and find books of your choice'
			className='container-fluid'
		>
			<div className='row'>
				<div className='col-4'>Left sidebar</div>
				<div className='col-8'>Right</div>
			</div>
		</Layout>
	);
};

export default Shop;
