This is my version of boilerplate that I use for bootstraping any of my new web app.

NEMBo stands for **N**ode **E**xpress **M**ongodb **Bo**ilerplate.

[@kaytrance](http://www.pixelfor.me/)


### Back-end components
- **server**: [express](http://expressjs.com/) with [compression](https://github.com/expressjs/compression), [body-parser](https://github.com/expressjs/body-parser), [connect-mongo](https://www.npmjs.com/package/connect-mongo), [cookie-parser](https://github.com/expressjs/cookie-parser) and [method-override](https://github.com/expressjs/method-override) middlewares.
- **database**: [mongoose](http://mongoosejs.com/)
- **template engine**: [ejs](https://www.npmjs.com/package/ejs) or [jade](https://www.npmjs.com/package/jade)
- **tests**: [mocha](https://www.npmjs.com/package/mocha) with [should](https://www.npmjs.com/package/should)
- **Other components**: [async](https://www.npmjs.com/package/async), [underscore](http://underscorejs.org/)


### Front-end components
- [jQuery](http://jquery.com/)
- [Angular.js](https://angularjs.org/)
- [Foundation](http://foundation.zurb.com/) from Zurb
- [SASS](http://sass-lang.com/)



### Installation
- in case you do not have globally installed **gulp** and **bower**, install them by running `npm install -g gulp bower`
- run `curl http://kaytrance.github.io/install | sh`



### Usage
- `gulp init` - copy&compile all necessary vendor files
- `gulp watch` - make all project files files and minify them.
- `gulp watch:dev` - for debug purposes the same as above, but it do not minifies css/js files.




## Licence
MIT

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.