import React from 'react';
import './App.css';
import { features, components } from './data';
import { Features } from './Features';
import Requirements from './Requirements';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedFeatures: [],
			componentRequirements: {}
		};

		this.selectedFeaturesChanged = this.selectedFeaturesChanged.bind(this);
	}

	selectedFeaturesChanged(selectedFeatures) {
		const componentRequirements = this.calculateComponentRequirements(selectedFeatures.map(feature => feature.requirements));

		this.setState(state => ({
			...state,
			selectedFeatures,
			componentRequirements
		}));
	}

	calculateComponentRequirements(featureRequirements, multiplier) {
		const requirements = {};
		multiplier = multiplier || 1;

		featureRequirements.forEach(featureRequirement => {
			Object.keys(featureRequirement).forEach(componentName => {
				if (!requirements[componentName]) {
					requirements[componentName] = 0;
				}
				const count = featureRequirement[componentName];

				requirements[componentName] += (count * multiplier);

				const component = components[componentName];

				const componentRequirements = this.calculateComponentRequirements([component.requirements], count);

				Object.keys(componentRequirements).forEach(name => {
					requirements[name] = (requirements[name] || 0) + componentRequirements[name];
				});
			});
		});

		return requirements;
	}

	render() {
		return (
			<div className="app">
				<div className="row">
					<div className="column">
						<h2>Features</h2>
					</div>
					<div className="column">
						<h2>Requirements</h2>
					</div>
				</div>
				<div className="row">
					<div className="column">
						<Features features={features} selectedFeatures={this.state.selectedFeatures} selectedFeaturesChanged={this.selectedFeaturesChanged} />
					</div>
					<div className="column">
						<Requirements components={components} componentRequirements={this.state.componentRequirements} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
