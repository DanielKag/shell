export function bootstrap() {
  return Promise.resolve();
}

export function mount() {  
  return Promise.resolve()
    .then(() => {
      document.getElementById("main-app").innerHTML = `
        <div>
          Hello Vanilla!
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