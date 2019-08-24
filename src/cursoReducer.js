const cursoReducer = (state = [{anio: "1",editing: false,id: "2019-08-24T13:51:41.312Z",turno: "A"}], action) => {
    switch (action.type) {
    case 'ADD_CURSO':
    return state.concat([action.data])
    case 'DELETE_CURSO':
    return state.filter((curso) => curso.id !== action.id)
    case 'EDIT_CURSO':
    return state.map((curso) => curso.id === action.id ? { ...curso, editing: !curso.editing } : curso)
    case 'UPDATE':
    return state.map((curso) => {
    if (curso.id == action.data.id) {
    return {
    ...curso,
    anio: action.data.anio,
    turno: action.data.turno,
    editing: !curso.editing
    }
    } else return curso;
    })
    default:
    return state;
    }
    }
    export default cursoReducer;