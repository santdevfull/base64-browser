import test from 'node:test';
import assert from 'node:assert/strict';
import {compute} from './tool.mjs';
test('sample behavior',()=>{const result=compute({"text": "Hello!"});for(const [key,value] of Object.entries({"encoded": "SGVsbG8h", "roundTrip": "Hello!"}))assert.deepStrictEqual(result[key],value,key)});
