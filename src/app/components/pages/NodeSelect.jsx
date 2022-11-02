import React from 'react';
import { connect } from 'react-redux';
import * as appActions from 'app/redux/AppReducer';

class NodeSelect extends React.Component {
    componentWillMount() {
        this.props.setRouteTag();
    }
    render() {
        return <div className="NodeSelect row">Placeholder</div>;
    }
}

module.exports = {
    path: 'nodeselect.html',
    component: connect(
        (state, ownProps) => ({}),
        dispatch => ({
            setRouteTag: () =>
                dispatch(appActions.setRouteTag({ routeTag: 'NodeSelect' })),
        })
    )(NodeSelect),
};
