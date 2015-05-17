# genoset-126 [![Build status](https://travis-ci.org/mathiasbynens/genoset-126.svg?branch=master)](https://travis-ci.org/mathiasbynens/genoset-126) [![Code coverage status](https://coveralls.io/repos/mathiasbynens/genoset-126/badge.svg)](https://coveralls.io/r/mathiasbynens/genoset-126) [![Dependency status](https://gemnasium.com/mathiasbynens/genoset-126.svg)](https://gemnasium.com/mathiasbynens/genoset-126)

This script determines if a genome is a poor metabolizer of the popular anticoagulant Warfarin as per [gs126](http://www.snpedia.com/index.php/gs126). Such genomes are at an increased risk of drug-induced side effects due to diminished drug elimination, and might need decreased dosages.

## Compatibility

This genoset is to be used with DNA-JSON. See [the _dna2json_ repository](https://github.com/genomejs/dna2json) for more information.

## Usage

```js
var isPoorWarfarinMetabolizer = require('genoset-126');
var dna = require('./my-dna.json');

console.log(isPoorWarfarinMetabolizer(dna));
// → `true` or `false`
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

_genoset-126_ is available under the [MIT](https://mths.be/mit) license.
