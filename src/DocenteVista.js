import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";
import DocenteForm from './DocenteForm';
import AllDocentes from './AllDocentes';
class DocenteVista extends Component {
    render() {
        return ( 
            <React.Fragment>
                <DocenteForm></DocenteForm>
                <AllDocentes></AllDocentes>
            </React.Fragment>
        )
    }
}
export default withRouter(connect()(DocenteVista));