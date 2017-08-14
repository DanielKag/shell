declare var window;

import { Injectable } from '@angular/core';

@Injectable()

export class ShellUtils {
    getStore() {
	
        if (window.shell && window.shell.store) {
            return window.shell.store;
        } else {
            // Return a mock store
            return {
                getState: () => ({currentUser: 'dummy'}),
                dispatch: (action) => null,
                subscribe: (fn) => x => x
            };
        }
    }

    sendMessage(appName, message) {

        if(window.shell && window.shell.sendMessage) {
            window.shell.sendMessage(appName, message);
        }

    }
}