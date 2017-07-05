import React from 'react';
import { UISref } from '@uirouter/react';

export class Child extends React.Component {

    constructor(props) {
        super(props);

        this.router = this.props.transition.router;
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {};

    handleClick() {
        const dataObjWrapper = {
            flag: true,
            dataObj: {
                id: 1,
                name: 'Mock data object'
            }
        };

        this.router.stateService.go('parent', dataObjWrapper);
    }

    render() {
        return (
            <div>
                <h1>Child</h1>
                <p><UISref to="parent"><a>Back to parent</a></UISref></p>
                <p><button
                        className="btn btn-primary"
                        onClick={this.handleClick}>
                            Programatically return to parent
                </button></p>
            </div>
        );
    }
}
