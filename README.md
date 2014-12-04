# Custom Bootstrap

Boilerplate code for [Twitter Bootstrap](http://getbootstrap.com/) customization based on [Customizing Bootstrap](http://coding.smashingmagazine.com/2013/03/12/customizing-bootstrap/).
 
## Getting Started
 
This project requires [Node](http://nodejs.org/).
 
1. Clone this repository under your project name (ex. `my-project`).

        git clone https://github.com/hugueschabot/custom-bootstrap.git my-project

2. Replace every occurence of `custom-bootstrap` by `my-project` in [package.json](./package.json), [bower.json](./bower.json) and [index.html](./index.html).

3. Install Node modules with `npm install`. It is recommended to install the `npm-exec` alias (see [this](http://stackoverflow.com/a/15157360)) to run locally installed modules.

4. Install Bower components with `npm-exec bower install`.
 
## Customization
 
1. Modify [less/custom-bootstrap.less](./less/custom-bootstrap.less) and [less/custom-variables.less](./less/custom-variables.less).
2. Run `npm-exec grunt` to generate a distribution.
3. Open [index.html](./index.html) to see the results.
4. Rinse and repeat until satisfied.
