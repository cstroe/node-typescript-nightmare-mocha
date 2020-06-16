import { hello } from './hello-world';
import { expect } from 'chai';
import 'mocha';

import Nightmare = require('nightmare');

describe('cosmind.cosmin.cloud', () => {

    it('should return hello world', () => {
      const result = hello();
      expect(result).to.equal('Hello world!');
    });

    it('should browse DuckDuckGo', () => {
      const nightmare = Nightmare({ show: true });
      nightmare
        .goto('https://duckduckgo.com')
        .type('#search_form_input_homepage', 'github nightmare')
        .click('#search_button_homepage')
        .wait('#r1-0 a.result__a')
        .evaluate(() => document.querySelector('#r1-0 a.result__a'))
        .end()
        .then(console.log)
        .catch(error => {
          console.error('Search failed:', error)
        });
    });
  
  });