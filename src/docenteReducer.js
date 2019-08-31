const docenteReducer = (state = [{curso: ["2019-08-24T13:51:41.312Z"],direccion: "123",editing: false,email: "pablogirola@email.com",id: "2019-08-24T13:53:21.959Z",legajo: "123",materia: "Algoritmos",nombre: "Pablo",telefono: "123"}], action) => {
    switch (action.type) {
        case 'ADD_DOCENTE':
            return [...state,action.data]
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