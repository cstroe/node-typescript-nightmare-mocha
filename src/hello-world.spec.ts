import { hello } from './hello-world';
import { expect } from 'chai';
import 'mocha';

import Nightmare = require('nightmare');

describe('cosmind.cosmin.cloud', () => {

    it('should return hello world', function() {
      const result = hello();
      expect(result).to.equal('Hello world!');
    });

    it('should browse DuckDuckGo', function(done) {
      this.timeout('10s'); // change mocha timeout

      const nightmare = Nightmare();
      nightmare
        .goto('https://duckduckgo.com')
        .type('#search_form_input_homepage', 'github nightmare')
        .click('#search_button_homepage')
        .wait('#links .result__a')
        .evaluate(() => document.querySelector<HTMLLinkElement>('#links .result__a').href)
        .end()
        .then(link => {
          expect(link).to.equal('https://github.com/segmentio/nightmare');
          done();
        })
        .catch((error) => {
          done(error);
        });
    });
  
  });