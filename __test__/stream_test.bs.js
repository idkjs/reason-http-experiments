// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.bs.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Stream = require("stream");
var Cast$MyFirstApp = require("../src/Cast.bs.js");

Jest.describe("Stream", (function (param) {
        Jest.test("pause/unpause", (function (param) {
                var subject = new Stream.PassThrough();
                subject.resume().pause();
                return Jest.Expect.toBe(true, Jest.Expect.expect(subject.isPaused()));
              }));
        return Jest.testAsync("Pipe data through stream", undefined, (function (finish) {
                      var subject = new Stream.PassThrough();
                      var dest = new Stream.PassThrough();
                      var fixture = "I am the string";
                      subject.pipe(dest);
                      subject.write(fixture, undefined);
                      dest.on("data", (function (out) {
                              var buf = Cast$MyFirstApp.classifyDataOutput(out);
                              switch (buf.TAG | 0) {
                                case /* Buf */0 :
                                    return Curry._1(finish, Jest.Expect.toEqual(fixture, Jest.Expect.expect(buf._0.toString())));
                                case /* Str */1 :
                                case /* JsType */2 :
                                    return Js_exn.raiseError("Did not get buffer");
                                
                              }
                            }));
                      
                    }));
      }));

/*  Not a pure module */
