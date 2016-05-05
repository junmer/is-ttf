/**
 * @file test
 * @author junmer
 */

'use strict';
var assert = require('assert');
var fs = require('fs');
var isTtf = require('./');

it('should detect TTF from Empty', function () {
    assert(!isTtf());
});

it('should detect TTF from Empty Buffer', function () {
    assert(!isTtf(new Buffer('')));
});

it('should detect TTF from String', function () {
    assert(isTtf(
        fs.readFileSync('pixel.ttf').toString('binary')
    ));
});

it('should detect TTF from Buffer', function () {
    assert(isTtf(fs.readFileSync('pixel.ttf')));
});

it('should be false when detect other type file', function () {
    assert(!isTtf(fs.readFileSync('index.js')));
    assert(!isTtf(fs.readFileSync('package.json')));
});

it('should detect TTF by opts.tables', function () {
    assert(!isTtf(
        fs.readFileSync('pixel.ttf').toString('binary'),
        {
            tables: ['cvt']
        }
    ));
});
