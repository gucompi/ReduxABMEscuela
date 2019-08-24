const notaReducer = (state = [], action) => {
    switch (action.type) {
    case 'ADD_NOTA':
    return state.concat([action.data])
    case 'DELETE_NOTA':
    return state.filter((nota) => nota.id !== action.id)
    case 'EDIT_NOTA':
    return state.map((nota) => nota.id === action.id ? { ...nota, editing: !nota.editing } : nota)
    case 'UPDATE':
    return state.map((nota) => {
    if (nota.id == action.data.id) {
    return {
    ...nota,
    curso:action.data.curso,
    alumno:action.data.alumno,
    docente:action.data.docente,
    nota:action.data.nota,
    editing: !nota.editing
    }
    } else return nota;
    })
    default:
    return state;
    }
    }
    export default notaReducer;