/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Iterator as Iter, IterableIterator } from '@stdlib/types/iter';

// Define a union type representing both iterable and non-iterable iterators:
type Iterator = Iter | IterableIterator;

/**
* Returns an iterator which steps by a specified amount.
*
* ## Notes
*
* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
*
* @param iterator - input iterator
* @param stride - stride
* @param offset - offset
* @param eager - boolean indicating whether to eagerly advance an input iterator when provided a non-zero `offset`
* @returns iterator
*
* @example
* var array2iterator = require( `@stdlib/array/to-iterator` );
*
* var arr = array2iterator( [ 0, 1, 2, 3, 4, 5, 6, 7 ] );
*
* var iter = iterStrided( arr, 2, 1 );
*
* var r = iter.next().value;
* // returns 1
*
* r = iter.next().value;
* // returns 3
*
* r = iter.next().value;
* // returns 5
*
* // ...
*/
declare function iterStrided( iterator: Iterator, stride: number, offset?: number, eager?: boolean ): Iterator; // tslint:disable-line:max-line-length


// EXPORTS //

export = iterStrided;
