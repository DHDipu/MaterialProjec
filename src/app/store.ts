import { INCREMENT } from './actions';
import { Observable } from 'rxjs';

export interface IAppState{
    counter: number;
}

export const INITIAL_STATE: IAppState = {
    counter: 0
};

// if you use redux then you need to install "npm install --save rxjs-compat"
// and import this on app module "import { Observable } from 'rxjs';"

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case INCREMENT: return {counter: state.counter + 1 };
    }
    return state;
}
