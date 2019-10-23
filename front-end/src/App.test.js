import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Music from './components/Music.jsx';
import renderer from 'react-test-renderer';

describe('Music component', () => {
	it('matches the snapshot', () => {
		const tree = renderer.create(<Music />).toJSON()
		expect(tree).toMatchSnapshot()
	})
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});