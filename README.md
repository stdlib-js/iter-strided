<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# iterStrided

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an [iterator][mdn-iterator-protocol] which steps by a specified amount.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import iterStrided from 'https://cdn.jsdelivr.net/gh/stdlib-js/iter-strided@esm/index.mjs';
```

#### iterStrided( iterator, stride\[, offset\[, eager]] )

Returns an [iterator][mdn-iterator-protocol] which steps by a specified amount.

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@esm/index.mjs';

var arr = array2iterator( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
var it = iterStrided( arr, 2 );
// returns <Object>

var r = it.next().value;
// returns 1

r = it.next().value;
// returns 3

r = it.next().value;
// returns 5

// ...
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

To skip the first `N` values of a provided [`iterator`][mdn-iterator-protocol], provide an `offset` argument.

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@esm/index.mjs';

var arr = array2iterator( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
var it = iterStrided( arr, 2, 1 );
// returns <Object>

var r = it.next().value;
// returns 2

r = it.next().value;
// returns 4

r = it.next().value;
// returns 6

// ...
```

By default, the returned [iterator][mdn-iterator-protocol] defers consuming the first `N` input [`iterator`][mdn-iterator-protocol] values until the first value of the returned [iterator][mdn-iterator-protocol] is consumed. To eagerly advance the input [`iterator`][mdn-iterator-protocol], set the `eager` argument to `true`.

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@esm/index.mjs';

var arr = array2iterator( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
var it = iterStrided( arr, 1, 4, true );
// returns <Object>

var r = it.next().value;
// returns 5

r = it.next().value;
// returns 6

r = it.next().value;
// returns 7

// ...
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator` **and** a provided [iterator][mdn-iterator-protocol] is iterable, the returned [iterator][mdn-iterator-protocol] is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-randu@esm/index.mjs';
import iterStrided from 'https://cdn.jsdelivr.net/gh/stdlib-js/iter-strided@esm/index.mjs';

// Create a seeded iterator for generating pseudorandom numbers:
var rand = randu({
    'seed': 1234,
    'iter': 10
});

// Create an iterator which returns every other random number:
var it = iterStrided( rand, 2 );

// Perform manual iteration...
var r;
while ( true ) {
    r = it.next();
    if ( r.done ) {
        break;
    }
    console.log( r.value );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/iter/advance`][@stdlib/iter/advance]</span><span class="delimiter">: </span><span class="description">advances an iterator.</span>
-   <span class="package-name">[`@stdlib/iter/nth`][@stdlib/iter/nth]</span><span class="delimiter">: </span><span class="description">return the nth iterated value.</span>
-   <span class="package-name">[`@stdlib/iter/strided-by`][@stdlib/iter/strided-by]</span><span class="delimiter">: </span><span class="description">create an iterator which steps according to a provided callback function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/iter-strided.svg
[npm-url]: https://npmjs.org/package/@stdlib/iter-strided

[test-image]: https://github.com/stdlib-js/iter-strided/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/iter-strided/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/iter-strided/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/iter-strided?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/iter-strided.svg
[dependencies-url]: https://david-dm.org/stdlib-js/iter-strided/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/iter-strided/tree/deno
[umd-url]: https://github.com/stdlib-js/iter-strided/tree/umd
[esm-url]: https://github.com/stdlib-js/iter-strided/tree/esm
[branches-url]: https://github.com/stdlib-js/iter-strided/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/iter-strided/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/iter/advance]: https://github.com/stdlib-js/iter-advance/tree/esm

[@stdlib/iter/nth]: https://github.com/stdlib-js/iter-nth/tree/esm

[@stdlib/iter/strided-by]: https://github.com/stdlib-js/iter-strided-by/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
