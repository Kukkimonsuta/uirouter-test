import React from 'react';
import ReactDOM from 'react-dom';
import { UIRouter, UIView, hashLocationPlugin, trace } from '@uirouter/react';
import { Parent } from './Parent';
import { Child } from './Child';
import { Deep } from './Deep';
import registerServiceWorker from './registerServiceWorker';

// define states
var appStates = [
    {
        name: "parent",
        url: "/parent",
        component: Parent
    },
    {
        name: "child",
        parent: "parent",
        url: "/child",
        views: {
            "!$default": Child
        }
    },
    {
        name: "deep",
        parent: "child",
        url: "/deep",
        views: {
            "!$default": Deep
        }
    }
];

var uiRouterConfigFn = function(router: UIRouter) {
    trace.enable(1);

    router.urlService.rules.otherwise(function(_router, _url) {
        let currentState = router.stateService.current.name;
        if(!currentState) {
            router.stateService.go('parent', null, {
                location: true
            });
        }
        return;
    });
}

ReactDOM.render(
    <UIRouter plugins={[hashLocationPlugin]} states={appStates} config={uiRouterConfigFn} >
        <div>
            <UIView/>
        </div>
    </UIRouter>,
    document.getElementById('root')
);

registerServiceWorker();
