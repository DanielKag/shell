# Shell
This is an infra app that can loads any web app dynamically.
It bundled with jspm and supplies common vendor packages to the children apps (angular, rxjs etc)

The Shell uses the [single-spa](https://github.com/CanopyTax/single-spa) framework and loads app dynamically with SystemJS.

### Run the application

`git clone https://github.com/DanielKag/shell.git`

`cd shell\shell`

`npm install`

`npm start`


### Build the shell (bundling it with the vendors packages)
`npm run build`

### Builing the application (transpiling and bundling with webpack)
Note: the application are not being bundled with the vendor packages

`npm run build:pvwa`

`npm run build:msp`

`npm run build:pta`

