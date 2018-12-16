const initState = {
    posts: [
        {id: '1', title: 'Squirtle ladi and egg', body: 'lorem ipsum , dolar sit meaet dfdlo'},
        {id: '2', title: 'Charmander Laid an Egg', body: 'lorem ipsum , dolar sit meaet dfdlo'},
        {id: '3', title: 'a Helix Fossil was Found', body: 'lorem ipsum , dolar sit meaet dfdlo'}
    ]
}

const rootReducer = (state=initState, action) => {
    if(action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return{
            ...state,
            posts: newPosts
        }  
    }
    return state;
}

export default rootReducer;