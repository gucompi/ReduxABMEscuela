import { combineReducers } from 'redux';

import cursoReducer from '../cursoReducer';
import alumnoReducer from '../alumnoReducer';
import docenteReducer from '../docenteReducer';
import notaReducer from '../notaReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
   cursoReducer,
   alumnoReducer,
   docenteReducer,
   notaReducer,
   form: formReducer
});

export default rootReducer;