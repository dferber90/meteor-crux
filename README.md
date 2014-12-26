*THIS IS STILL BEING WORKED ON. DO NOT USE YET*.

# Basic

A Meteor projects where most problems are solved.


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





## Packages / Libraries


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
See [LICENSE.txt](LICENSE.txt).