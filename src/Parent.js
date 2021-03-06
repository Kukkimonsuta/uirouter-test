import React from 'react';
import { UISref } from '@uirouter/react';

export class Parent extends React.Component {
    constructor(props) {
        super(props);

        this.handleChildClick = this.handleChildClick.bind(this);
        this.handleDeepClick = this.handleDeepClick.bind(this);
    }

    handleChildClick() {
        this.props.transition.router.stateService.go('child', {}, { custom: {
            flag: true,
            dataObj: {
                id: 1,
                name: 'data from parent to child'
            }
        } });
    }

    handleDeepClick() {
        this.props.transition.router.stateService.go('deep', {}, { custom: {
            flag: true,
            dataObj: {
                id: 1,
                name: 'data from parent to deep'
            }
        } });
    }

    render() {
        return (
            <div>
                <h1>Parent</h1>
                <p><UISref to="child"><a>Go to child</a></UISref></p>
                <p><UISref to="deep"><a>Go to deep</a></UISref></p>
                <p><button className="btn btn-primary" onClick={this.handleChildClick}>Programatically go to child</button></p>
                <p><button className="btn btn-primary" onClick={this.handleDeepClick}>Programatically go to deep</button></p>
                <dl>
                    <dt>id:</dt>
                    <dd>{this.props.transition.$id}</dd>
                    <dt>data:</dt>
                    <dd>{JSON.stringify(this.props.transition.options().custom)}</dd>
                </dl>
            </div>
        );
    }
}
