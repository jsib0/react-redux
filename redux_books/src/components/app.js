import React, { Component } from 'react';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
    	<div>
    		<BookList />  {/*l.42 1:20 */}
    		<BookDetail /> {/* l.48 */}
    	</div>
    );
  }
}
