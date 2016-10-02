(function (global) {
  System.config({
    map: {
      '@angular/core': 'lib/core.umd.js',
      '@angular/common': 'lib/common.umd.js',
      '@angular/compiler': 'lib/compiler.umd.js',
      '@angular/platform-browser': 'lib/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'lib/platform-browser-dynamic.umd.js',
      '@angular/http': 'lib/http.umd.js',
      '@angular/router': 'lib/router.umd.js',
      '@angular/forms': 'lib/forms.umd.js',
      "rxjs": 'lib/rxjs'
    },
    packages: {
      "rxjs": {main: "Rx.js", defaultExtension: "js"}
    }
  });
})(this);

