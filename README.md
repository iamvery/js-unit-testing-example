# JavaScript Unit Testing Example

I recently needed to unit test some JavaScript. I had some difficulty
determining a solid setup for accomplishing this. After some research, this is
what I've come up with.

## Setup

Clone the repository and change into the new directory:

```
$ git clone git@github.com:iamvery/js-unit-testing-example.git
$ cd js-unit-testing-example
```

This setup requires Node.js. I installed it using Homebrew:

```
$ brew install node
```

Finally install the Node package.json dependencies:

```
$ npm install
```

## Run the test suite

```
$ grunt jasmine
# or simply
$ grunt
# because the "default" task is set to jasmine
```
