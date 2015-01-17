Stamps.autorun = stampit().enclose(function () {
  var depsHandles = [],
    isDisposed = false;

  this.dispose = function () {
    isDisposed = true;
    if (_.isArray(depsHandles)) {
      _.each(depsHandles, function (handle) {
        if (handle) handle.stop();
      });
    }
    delete depsHandles;
  };

  this.autorun = function (func) {
    var handle;

    if (isDisposed || ! _.isFunction(func)) return;

    handle = Deps.autorun(function (computation) {
      return func(computation);
    });
    depsHandles.push(handle);
    return handle;
  };
});