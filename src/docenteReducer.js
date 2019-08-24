const docenteReducer = (state = [], action) => {
    switch (action.type) {
    case 'ADD_DOCENTE':
    return state.concat([action.data])
    case 'DELETE_DOCENTE':
    return state.filter((docente) => docente.id !== action.id)
    case 'EDIT_DOCENTE':
    return state.map((docente) => docente.id === action.id ? { ...docente, editing: !docente.editing } : docente)
    case 'UPDATE':
    return state.map((docente) => {
    if (docente.id == action.data.id) {
    return {
    ...docente,
    nombre:action.data.nombre,
    email:action.data.email,
    direccion:action.data.direccion,
    telefono:action.data.telefono,
    legajo:action.data.legajo,
    curso:action.data.curso,
    materia:action.data.materia,
    editing: !docente.editing
    }
    } else return docente;
    })
    default:
    return state;
    }
    }
    export default docenteReducer;