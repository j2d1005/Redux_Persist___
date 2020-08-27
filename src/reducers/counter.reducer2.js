export const INCREMENT2 = 'INCREMENT2';
export const DECREMENT2 = 'DECREMENT2';

const initialState = {
    number2: 0
};

export default function counter2 (state = initialState, action) {
    switch (action.type) {
        case INCREMENT2:
            return {
                ...state,
                number2: state.number2 + 1
            };
        case DECREMENT2:
            return {
                ...state,
                number2: state.number2 - 1
            };
        default:
            return state;
    }
};