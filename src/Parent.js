import React from 'react';
import { UISref } from '@uirouter/react';

export class Parent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            passedFromChild: '[null]'
        };

        console.log('ctor');
    }

    componentDidMount() {
        console.log('will mount');

        const transService = this.props.transition.router.transitionService;

        this.onSuccessDisposer = transService.onSuccess(
            { to: 'parent', from: 'child' },
            (trans, state) => this.onSuccess(trans, state)
        );
    }

    componentWillUnmount() {
        console.log('unmount');

        this.onSuccessDisposer();
    }

    onSuccess(trans, state) {
        const myObj = trans.targetState().params().dataObj;

        if (!myObj) {
            console.log('State params not passed ("Back to Parent" <a /> was clicked), so return.');
            debugger;

            return;
        }

        const name = myObj.name;

        console.log('State params passed! ("Programatically return to Parent" <button /> was clicked.)');
        console.log('Received state object (name property): ' + name);
        debugger;

        /*
            Component is not mounted so receives a no-op warning from React:

            "Warning: setState(...) Can only update a mounted or mounting component. This
            usually means you called setState() on an unmounted component. This is a no-op.
            Please check the code for the Parent component."
        */
        this.setState({
            passedFromChild: name
        });
    }

    render() {
        return (
            <div>
                <h1>Parent</h1>
                <p><UISref to="child"><a className="btn btn-link">Go to Child</a></UISref></p>
                <dl>
                    <dt>passedFromChild:</dt>
                    <dd>{this.state.passedFromChild}</dd>
                </dl>
            </div>
        );
    }
}
