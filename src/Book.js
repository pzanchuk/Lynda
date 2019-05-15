import React from 'react';

export const Book = ({title='Not provided', author, pages, freeBookmark}) => {
	return (
		<section>
			<h2>{title}</h2>
			<p>by: {author}</p>
			<p>Pages: {pages} pages</p>
            <p>Free bookmark today: {freeBookmark ? 'Yes' : 'No'}</p>
		</section>
	)
}