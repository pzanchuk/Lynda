import React from 'react';
import { render } from 'react-dom';
import  Library  from './Library';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


let bookList = [
	{"author": "Roxane Gay", "pages": 320},
	{"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
	{"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
	{"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304}
]

render(
	<Library books={bookList}/>, 
	document.getElementById('root')
)
