## BMI Calculator

[![Build Status](https://travis-ci.com/GermaVinsmoke/bmi-calculator.svg?branch=master)](https://travis-ci.com/GermaVinsmoke/bmi-calculator)
[![Coverage Status](https://coveralls.io/repos/github/GermaVinsmoke/bmi-calculator/badge.svg?branch=master)](https://coveralls.io/github/GermaVinsmoke/bmi-calculator?branch=master)
[![codecov](https://codecov.io/gh/GermaVinsmoke/bmi-calculator/branch/master/graph/badge.svg)](https://codecov.io/gh/GermaVinsmoke/bmi-calculator)

React Hooks app to calculate the BMI of a person. It can store the data for 7 days with the help of LocalStorage.

![](images/1.jpg)

Created with _create-react-app_. See the [full create-react-app guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Install

1. Download and install the latest version of [Node.js](https://nodejs.org/en/download)

2. Run the following command to install frozen dependencies

`npm install --frozen-lockfile`

## Usage

1. Use the legacy SSL provider to avoid a crash during startup [more info](https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported):

`set NODE_OPTIONS=--openssl-legacy-provider`

`npm start`

## Enhancement

1. Removing the dependency of Materialize-CSS module

~~2. Chart going crazy on hovering over the old points~~
