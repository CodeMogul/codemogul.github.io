import { h } from 'preact';

import Header from './sections/Header';
import Workex from './sections/Workex';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Summary from './sections/Summary';
import Achievements from './sections/Achievements';
import DownloadPdfButton from './components/DownloadPdfButton';

export default function App() {
	return (
		<div className="container">
			<Header />
			<div className="two-column">
				<div>
					<Summary />
					<Workex />
					<Education />
				</div>
				<div>
					<Achievements />
					<Skills />
					<Projects />
				</div>
			</div>
			<DownloadPdfButton />
		</div>
	)
}
