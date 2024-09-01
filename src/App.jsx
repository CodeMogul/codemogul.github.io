import { h } from 'preact';

import Header from './components/Header';
import Workex from './components/Workex';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';

export default function App() {
  return (
		<div className="container">
			<Header />
			<Workex />
			<div className="grid">
				<div>
					<Projects />
					<Education />
				</div>
				<Skills />
			</div>
		</div>
  )
}
