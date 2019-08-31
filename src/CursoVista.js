import React, { Component } from 'react';
import { connect } from 'react-redux';
import CursoForm from './CursoForm';
import AllCursos from './AllCursos';
class CursoVista extends Component {
    render() {
        return (
            <React.Fragment>
                <CursoForm></CursoForm>
                <AllCursos></AllCursos>
            </React.Fragment>
        )
    }
}
export default connect()(CursoVista); 