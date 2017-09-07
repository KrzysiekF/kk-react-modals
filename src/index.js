import ModalsContener from './modals-contener';
import modalsReducer from './reducers';
import { emmiter } from './event-emmiter';

export default ModalsContener;
export const reducer = modalsReducer;
export const modal = emmiter;
