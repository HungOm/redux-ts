import { ActionType } from '../action_types/index';
import { Action } from '../actions/index';


interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}
const initialState = {
    loading:false,
    error:null,
    data:[]
};
// initialState must be defuned  to avoid the following error -
// Error: Reducer "repositories" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.
const reducer = (
    state: RepositoriesState=initialState,
    action: Action
): RepositoriesState => {
    // if(action.type === 'search_repositories_success'){
    //     // action satisfied 
    //     action.payload
    // }
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return { loading: true, error: null, data: [] };
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return { loading: false, error: null, data: action.payload }
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return { loading: false, error: action.payload, data: [] };
        default:
            return state;
    }
};
export default reducer;