System.trace = true;

window.showModuleRelationships = function () {
  var modules = Object.keys(System.loads)
    .map(function (moduleName) {
      return System.loads[moduleName];
    });

  function displayName(module) {
    return module
      .replace(System.baseURL, "")
      .replace('https://unpkg.com/', '')
      .replace('http://127.0.0.1:8080/node_modules/', '')
      ;

  }

  var moduleDefinitions = modules.map(function (module) {
    var name = displayName(module.key);
    return "[" + name + /*"|" + module.metadata.format +*/ "]";
  });

  var dependencyDefinitions = [];

  modules
    .filter(function (module) {
      return module.deps.length > 0;
    })
    .forEach(function (module) {
      var name = displayName(module.key);

      var dependencies = module.deps
        .map(function(dependency){
          return System.normalizeSync(dependency, module.key, module.address);
        })
        .map(displayName)
        .map(function (dependencyName) {
          return "[" + name + "]->[" + dependencyName + "]"
        });

      dependencyDefinitions = dependencyDefinitions.concat(dependencies);
    });

  var definitions = moduleDefinitions.concat(dependencyDefinitions);

  window.open("http://yuml.me/diagram/plain/class/" + definitions);

};