import { title } from './pta_helper.js';

export function bootstrap() {
  return Promise.resolve();
}

export function mount() {
  return Promise.resolve()
    .then(() => {
      document.getElementById("main-app").innerHTML = `
        <div>
          Hello PTA!
          load: ${title}
        <div>
      `
    })
}

export function unmount() {
  return Promise.resolve()
    .then(() => {
      document.getElementById("main-app").innerHTML = '';
    })
}