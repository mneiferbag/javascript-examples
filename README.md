# Web Development Examples

Licensed under the MIT License. See file LICENSE.

Collection of web development examples. Examples include CSS, HTML, JavaScript, JSON, Node.js.

## Docker

See [Use Docker to Create a Node Development Environment](https://auth0.com/blog/use-docker-to-create-a-node-development-environment/) and [How To Setup Your Local Node.js Development Environment Using Docker - Part 1](https://www.docker.com/blog/how-to-setup-your-local-node-js-development-environment-using-docker/) and [Part 2](https://www.docker.com/blog/how-to-setup-your-local-node-js-development-environment-using-docker-part-2/).

For testing with Cypress and Docker, see [Run Cypress with a single Docker command](https://www.cypress.io/blog/2019/05/02/run-cypress-with-a-single-docker-command/) from Gleb Bahmutov.

If you have problems with file permissions when writing files on your host from within your Docker container, see this blog post from Juan Treminio on [Running Docker Containers as Current Host User](https://jtreminio.com/blog/running-docker-containers-as-current-host-user/).

Add editors to containers by adding `apt-get` to `Dockerfile`.

    RUN apt-get update && \
        apt-get install -y nano vim

## Node

To check if any module in a project is outdated use `npm outdated`. To update all dependencies use `npm update`.

## Links

* [Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/ "Can I use... Support tables for HTML5, CSS3, etc")
* [Deno Examples](https://github.com/mneiferbag/deno-examples)
* [faker.js](https://github.com/Marak/faker.js) - generate massive amounts of fake data in the browser and node.js
* [Node.js](https://nodejs.org/ "Node.js")
* [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
* [What browser am I using? Is my browser up to date?](https://www.whatismybrowser.com/ "What browser am I using? Is my browser up to date?")
* Articles
   * [Karate for Selenium users](https://medium.com/@mneiferbag/karate-for-selenium-users-875a165823ee)
* JSON
   * [JSON Editor Online](https://jsoneditoronline.org/ "JSON Editor Online")
   * [JSON Schema](http://json-schema.org/ "JSON Schema")
   * [JSON Schema Tool](https://jsonschema.net/ "JSON Schema Tool")
   * [Online JSON Formatter](https://jsonformatter.org/ "Best JSON Formatter and JSON Validator: Online JSON Formatter")
* Testing
   * [Chai Assertion Library](https://www.chaijs.com/ "Chai Assertion Library")
   * [ChromeDriver - WebDriver for Chrome](https://sites.google.com/chromium.org/driver/)
   * [Cypress](https://www.cypress.io/ "Cypress")
   * [Elemental Selenium](https://elementalselenium.com/ "Elemental Selenium")
   * [ESLint](https://eslint.org/) statically analyzes your code to quickly find problems
   * [fast-check](https://dubzzz.github.io/fast-check.github.com/) - a library for property-based testing
   * [Mocha Test Framework](https://mochajs.org/ "Mocha Test Framework")
   * [Selenium Documentation](https://www.selenium.dev/documentation/en/ "Selenium Documentation")
   * [Tcases for OpenAPI: From REST-ful to Test-ful](https://github.com/Cornutum/tcases/tree/master/tcases-openapi)
   * [Telerik Fiddler](https://www.telerik.com/fiddler "Telerik Fiddler")
   * [Testing Library](https://testing-library.com/ "Testing Library")
   * [WebdriverIO](https://webdriver.io/ "WebdriverIO")
