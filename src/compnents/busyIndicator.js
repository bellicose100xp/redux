/**
 * Created by HSO on 12/9/15.
 */
import React from 'react';
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return {
        busy: state.busyReducer.busy
    }
};

const BusyIndicator = ({busy}) =>
    (busy ? <div>Updating Data...</div> : <span />);

export default connect(mapStateToProps)(BusyIndicator);


