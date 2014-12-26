*THIS IS STILL BEING WORKED ON. DO NOT USE YET*.

[![Build Status](https://travis-ci.org/dferber90/meteor-crux.svg?branch=master)](https://travis-ci.org/dferber90/meteor-crux)

# Basic
A starting point for Meteor projects where most problems are solved.


## Developing
> Everything is a package. No app code!


## UI
Build components using `respondly:meteor-ctrl`, [docs](https://github.com/Respondly/meteor-ctrl/blob/master/docs/ctrls.md).
Test them in development using UIHarness.

## Testing
practicalmeteor:munit

### spacejam
Docs: [npm](https://www.npmjs.com/package/spacejam)
Post: [here](http://practicalmeteor.com/testing-meteor-packages-command-line-travis-ci/#more-166)

`npm install -g spacejam`
Spacejam runs
`meteor test-package --driver-package test-in-console`
using phantomjs and reports the success through the exit code.

### mocha

### chai

### nightwatch
npm install -g nightwatch

meteor run --production
nightwatch --config tests/nightwatch/nightwatch.json --env default

Tests run using phantomjs which is included as a binariy in tests/nightwatch/lib.
https://github.com/beatfactor/nightwatch/wiki/Running-tests-in-PhantomJS

Tests also use Selenium.
There is currently an error in v2.44.0, so we use v2.43.1.
https://github.com/beatfactor/nightwatch/issues/309
https://code.google.com/p/selenium/issues/detail?id=8088



### Travis CI
[travis-ci](http://travis-ci.org).
Tutorial on that is also included [here](Post: [here](http://practicalmeteor.com/testing-meteor-packages-command-line-travis-ci/#more-166).




## 3rd-party Packages / Libraries

### stampit
No classes. Use factories. Build objects by combining modules.
* [No classes (two pillars of js)](https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3)
* [github docs](https://github.com/ericelliott/stampit)




## Limitations
* not exported methods of packages are not testable (not accessible from tests)
	-> Possible workaround could be to store them in "private" var (would possibly result in namespace collisions)
	-> but actually the tests should only care about the exported vars /public api



# License
The MIT License (MIT)

Copyright (c) 2014 Dominik Ferber
See [LICENSE](LICENSE).