// jshint esversion:6
import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';  //file system,comes with node


describe('our first test', () =>{
    it('should pass', () => {
        expect(true).to.equal(true); //Our assertion
    });
});

describe('index.html', () =>{
    it('should say hello', () =>{  //place done in bracket for other tests
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(index, function(err, window){
            const h1 = window.document.getElementByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Hello World!"); //Our Assertion
           //done();
            window.close();
         });
    });
});