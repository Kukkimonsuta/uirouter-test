import React from 'react';
import { UISref } from '@uirouter/react';

export class Child extends React.Component {

    constructor(props) {
        super(props);

        this.handleParentClick = this.handleParentClick.bind(this);
        this.handleDeepClick = this.handleDeepClick.bind(this);
    }

    handleParentClick() {
        this.props.transition.router.stateService.go('parent', {}, { custom: {
            flag: true,
            dataObj: {
                id: 1,
                name: 'data from child to parent'
            }
        } });
    }

    handleDeepClick() {
        this.props.transition.router.stateService.go('deep', {}, { custom: {
            flag: true,
            dataObj: {
                id: 1,
                name: 'data from child to deep'
            }
        } });
    }

    render() {
        return (
            <div>
                <h1>Child</h1>
                <p><UISref to="parent"><a>Go to parent</a></UISref></p>
                <p><UISref to="deep"><a>Go to deep</a></UISref></p>
                <p><button className="btn btn-primary" onClick={this.handleParentClick}>Programatically go to parent</button></p>
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
