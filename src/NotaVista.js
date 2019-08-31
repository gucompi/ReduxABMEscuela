import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotaForm from './NotaForm';
import AllNotas from './AllNotas';
import {withRouter } from "react-router-dom";
class NotaVista extends Component {
    render() {
        return (
            <React.Fragment>
                <NotaForm></NotaForm>
                <AllNotas></AllNotas>
            </React.Fragment>
        ) 
    }
}
export default withRouter(connect()(NotaVista));