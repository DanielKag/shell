window.shell = {
    store: Redux.createStore((state, action) => action.payload)    
}

const changeUser = () => {
    const user = document.getElementById('currentUser').value;
    window.shell.store.dispatch({ type: 'ChangeUser', payload: user })
}


changeUser();

const onActiveUserChange = () => {
    changeUser();
}