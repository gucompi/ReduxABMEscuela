const alumnoReducer = (state = [], action) => {
    switch (action.type) {
    case 'ADD_ALUMNO':
    return state.concat([action.data])
    case 'DELETE_ALUMNO':
    return state.filter((alumno) => alumno.id !== action.id)
    case 'EDIT_ALUMNO':
    return state.map((alumno) => alumno.id === action.id ? { ...alumno, editing: !alumno.editing } : alumno)
    case 'UPDATE':
    return state.map((alumno) => {
    if (alumno.id == action.data.id) {
    return {
    ...alumno,
    nombre:action.data.nombre,
    email:action.data.email,
    direccion:action.data.direccion,
    telefono:action.data.telefono,
    legajo:action.data.legajo,
    curso:action.data.curso,
    editing: !alumno.editing
    }
    } else return alumno;
    })
    default:
    return state;
    }
    }
    export default alumnoReducer;