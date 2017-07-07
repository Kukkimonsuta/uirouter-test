import React from 'react';
import { UISref } from '@uirouter/react';

export class Deep extends React.Component {

    constructor(props) {
        super(props);

        this.handleParentClick = this.handleParentClick.bind(this);
        this.handleChildClick = this.handleChildClick.bind(this);
    }

    handleParentClick() {
        this.props.transition.router.stateService.go('parent', {}, { custom: {
            flag: true,
            dataObj: {
                id: 1,
                name: 'data from deep to parent'
            }
        } });
    }

    handleChildClick() {
        this.props.transition.router.stateService.go('child', {}, { custom: {
            flag: true,
            dataObj: {
                id: 1,
                name: 'data from deep to child'
            }
        } });
    }

    render() {
        return (
            <div>
                <h1>Child</h1>
                <p><UISref to="parent"><a>Go to parent</a></UISref></p>
                <p><UISref to="child"><a>Go to child</a></UISref></p>
                <p><button className="btn btn-primary" onClick={this.handleParentClick}>Programatically go to parent</button></p>
                <p><button className="btn btn-primary" onClick={this.handleChildClick}>Programatically go to child</button></p>
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
