/**
 * Types a key sequence on the DOM element. Can be used to send a sequence of key strokes to an element. Any UTF-8 character may be specified.
 *
 * An object map with available keys and their respective UTF-8 characters, as defined on [W3C WebDriver draft spec](https://www.w3.org/TR/webdriver/#character-types), is loaded onto the main Nightwatch instance as `browser.Keys`.
 *
 * For more info on working with DOM elements in Nightwatch, refer to the <a href="https://nightwatchjs.org/guide/writing-tests/finding-interacting-with-dom-elements.html">Finding & interacting with DOM Elements</a> guide page.
 *
 * @example
 * export default {
 *   demoTest(browser: NightwatchClient): void {
 *     browser.element('input[type=text]').sendKeys('nightwatch');
 *   },
 *
 *   async demoTestAsync(browser: NightwatchClient): Promise<void> {
 *     browser.element('input[type=text]').sendKeys('nightwatch');
 *   }
 * }
 *
 * @since 3.0.0
 * @method sendKeys
 * @memberof ScopedWebElement
 * @instance
 * @syntax browser.element(selector).sendKeys(...keys)
 * @param {...string} keys
 * @see https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html#sendKeys
 * @returns {ScopedWebElement}
 */
module.exports.command = function(...args) {
  const keys = args.reduce((prev, key) => {
    const keyList = Array.isArray(key) ? key : [key];
    prev.push(...keyList);

    return prev;
  }, []);

  return this.runQueuedCommand('sendKeysToElement', {
    args: [keys]
  });
};