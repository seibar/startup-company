import React from 'react';
import './Features.css';

class Features extends React.Component {
	constructor(props) {
		super(props);

		this.renderButton = this.renderButton.bind(this);
	}

	selectFeature(feature) {
		const isSelected = !!this.props.selectedFeatures.find(f => f.name === feature.name);

		if (isSelected) {
			this.props.selectedFeaturesChanged(this.props.selectedFeatures.filter(f => f.name !== feature.name));
		} else {
			this.props.selectedFeaturesChanged([
				...this.props.selectedFeatures,
				feature
			]);
		}
	}

	renderButton(feature) {
		const isSelected = !!this.props.selectedFeatures.find(f => f.name === feature.name);
		const iconClass = feature.icon ? `fa ${feature.icon}` : '';

		return (
			<li key={feature.name}>
				<div className={`feature-button ${isSelected ? 'selected' : ''}`}
					onClick={() => this.selectFeature(feature)}>
					<span className="feature-icon"><i className={iconClass}></i></span>
					{feature.name}
				</div>
			</li>
		);
	}

	render() {
		return (
			<ul className="features-list">
				{this.props.features.map(this.renderButton)}
			</ul>
		);
	}
}

export {
	Features
};