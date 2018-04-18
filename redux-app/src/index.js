import {createStore} from 'redux';

const initialState = {
    tasks: [],
};

function tasksReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: state.tasks.concat([action.payload.task]),
            };
        default:
            return state;
    }
}

const store = createStore(tasksReducer);

function handleChange() {
    console.log('[handleChange] ')
    console.log(store.getState());
}

const unsubscribe = store.subscribe(handleChange);
// unsubscribe();

const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: {
        task
    }
});

console.log('[before dispatch] ');
console.log(store.getState());
store.dispatch(addTask('Storeを学ぶ'));
console.log('[after dispatch] ');
console.log(store.getState());
