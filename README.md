![Episerver](https://ux.episerver.com/images/logo.png)
# Foundation SPA React: Core Library  <!-- omit in toc -->
This library contains the core functionality for the Episerver Foundation React based SPA. For a full example project based upon this library head over to [Foundation Spa React](https://github.com/episerver/Foundation-spa-react).

You can request a demo of the project by one of our Episerver experts on [Get a demo](https://www.episerver.com/get-a-demo/).

[![License](https://img.shields.io/:license-apache-blue.svg?style=flat-square)](http://www.apache.org/licenses/LICENSE-2.0.html)
![Typescript](https://img.shields.io/npm/types/typescript?style=flat-square)
***

## Table of Contents  <!-- omit in toc -->
- [1. Introduction](#1-introduction)
- [2. Installation](#2-installation)
- [3. Usage](#3-usage)
- [4. Known issues](#4-known-issues)

***

## 1. Introduction 
This library contains the core functionality for the Episerver Foundation React based SPA. It covers the following capabilities:

- Application configuration
- Service container
- Extension/module loading
- Routing
- Component loading
- Episerver Model synchronization

## 2. Installation
```
npm install --save-prod git+https://github.com/episerver/foundation-lib-spa-core.git
```

The library has been optimized for usage with Webpack and the Webpack companion scripts. Although strictly spoken optional it's highly recommended to use Webpack for build and delivery.

Make sure that your project provides the required peer dependencies for the library to work. As the library has been written in TypeScript it requires you to also install the TypeScript type definitions when these are not included in the main project.

| Dependency | Version | Installation |
| --- | --- | --- |
|@reduxjs/toolkit|^1.3.6|`npm install --save-prod @reduxjs/toolkit`|
|axios|^0.19.2|`npm install --save-prod axios`|
|core-js|^3.6.5|`npm install --save-prod core-js`<br>`npm install --save-dev @types/core-js`|
|dotenv|^8.2.0|`npm install --save-prod dotenv`|
|lodash|^4.17.15|`npm install --save-prod lodash`|
|react|^16.13.1|`npm install --save-prod react`<br>`npm install --save-dev @types/react`|
|react-dom|^16.13.1|`npm install --save-prod react-dom`<br>`npm install --save-dev @types/react-dom`|
|react-helmet|^6.0.0|`npm install --save-prod react-helmet`<br>`npm install --save-dev @types/react-helmet`|
|react-redux|^7.2.0|`npm install --save-prod react-redux`<br>`npm install --save-dev @types/react-redux`|
|redux|^4.0.5|`npm install --save-prod redux`|

## 3. Usage
Please check [Foundation Spa React](https://github.com/episerver/Foundation-spa-react) to see a full example implementation using this library.

## 4. Known issues
All issues for this library are tracked through GitHub issues. The following issues/design flaws are known but are not planned to be resolved in the short term.

- Although required as production dependency it contains development only binaries. These *should* be split into a separate development library. 
- The "server side rendering only" scripts are included in this framework. These *should* be split into a server side rendering library.