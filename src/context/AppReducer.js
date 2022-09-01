export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'addUser':
            return action.payload;
        case 'LIST_POST':
            return {
                ...state,
                post: action.payload
            };
        case 'LIST_USER':
            return {
                ...state,
                user: action.payload
            };
        case 'LOGIN':
            return {
                ...state,
                accessToken: action.payload
            };
    }
}