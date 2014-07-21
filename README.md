scrabble-score
====================

README for Scrabble Score Calculator

* Author: Cindy Ward <cindyward@yahoo.com>
* Date created: July 13, 2014
* Last modification date: July 14, 2014 (branch created to use an external file as a Scrabble valid word dictionary)
* Created for:  Epicodus, Summer 2014 session

Included; written by author:
* ./README.md (this file)
* ./LICENSE.md (using the "Unlicense" template)
* ./index.html
* ./css/styles.css
* ./data/sowpods.txt (downloaded from Web)
* ./img/scrabble.jpg (downloaded from Web)
* ./js/scripts.js
* ./spec/spec-runner.html
* ./spec/specs.js

Included; written by others but required for proper execution of application:
* ./css/bootstrap.js
* ./css/bootstrap.css
* ./js/jsquery-1.11.1.js
* ./spec/chai.js
* ./spec/mocha.js
* ./spec/mocha.css

Description:
This Web application asks the user to enter a word and returns the Scrabble score of the word. Lower case characters will be converted to upper case. The Scrabble scores per letter are as follows:

* 1:  A, E, I, O, U, L, N, R, S, T
* 2:  D, G
* 3:  B, C, M, P
* 4:  F, H, V, W, Y
* 5:  K
* 8:  J, X
* 10: Q, Z

Per the official Scrabble rules, nothing but letters can be used. Words with apostrophes and hyphens are not allowed, and a blank tile cannot be used to represent an apostrophe or a hyphen. Thus the input functionality will flag the input with a red box border, red label, and red x glyphicon. Legal input will be flagged with a green box border, green label, and green check glyphicon.
