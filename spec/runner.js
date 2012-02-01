JS.cacheBust = true;

JS.Packages(function() { with(this) {
  var ROOT = JS.ENV.ROOT || '.';
  
  file(ROOT + '/lib/foo.js').provides('Foo');
  file(ROOT + '/spec/foo_spec.js').provides('FooSpec').requires('Foo');
}});

JS.require('JS.Test', function() {
  JS.require('FooSpec', function() { JS.Test.autorun() });
});

