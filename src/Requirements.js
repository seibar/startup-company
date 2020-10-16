import React from 'react';
import './Requirements.css';

class Requirements extends React.Component {
	render() {
		return (
			<ul className="requirements-list">
				{Object.keys(this.props.components).map(componentKey => {
					const component = this.props.components[componentKey];
					const count = this.props.componentRequirements[componentKey] || '-';
					const countClassName = `component-count ${count > 0 ? 'has-count' : ''}`;

					return (
						<li key={component.name} className="requirement">
							<img src={component.icon}/>
							<div className="column-name">
								<span className="component-name">{component.name}</span>
							</div>
							<div className="column-count">
								<span className={countClassName}>{count}</span>
							</div>
						</li>
					);
				})}
			</ul>
		)
	}
}

export default Requirements;