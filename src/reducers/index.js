import { combineReducers } from 'redux';

import postReducer from '../postReducer';
import cursoReducer from '../cursoReducer';
import alumnoReducer from '../alumnoReducer';
import docenteReducer from '../docenteReducer';
import notaReducer from '../notaReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
   postReducer,
   cursoReducer,
   alumnoReducer,
   docenteReducer,
   notaReducer,
   form: formReducer
});

export default rootReducer;