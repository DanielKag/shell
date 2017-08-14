import 'zone.js';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import mainModule from './main-module';

platformBrowserDynamic().bootstrapModule(mainModule);
