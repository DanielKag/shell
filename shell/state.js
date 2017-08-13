import Redux from 'redux';


const initialShellState = {
    currentUser: '',
    childMessages: {}
}

const shellReducer = (state = initialShellState, action) => {

    switch (action.type) {
        case 'CHANGE_USER':            
            return Object.assign({}, state, {currentUser: action.payload});
        
        case 'SEND_MESSAGE': {

            const newMessages = Object.assign({}, state.childMessages, {[action.payload.appName]: action.payload.message})
            return Object.assign({}, state, {childMessages: newMessages});
        }
    
        default:
            return state;
    }

}


window.shell = {
    store: Redux.createStore(shellReducer)    
}

const changeUser = () => {
    const user = document.getElementById('currentUser').value;
    window.shell.store.dispatch({ type: 'CHANGE_USER', payload: user })
}


changeUser();

const onActiveUserChange = () => {
    changeUser();
}

document.getElementById('currentUser').addEventListener('keyup', onActiveUserChange);

// update messages from child apps
window.shell.store.subscribe(() => {
        const messages = window.shell.store.getState().childMessages;        
        document.getElementById('messages').innerHTML = JSON.stringify(messages, null, 4);
});

window.shell.sendMessage = (appName, message) => {
		window.shell.store.dispatch({type: 'SEND_MESSAGE', payload: {appName, message}});
}