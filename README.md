# Test Harness Dev Guide
 node 12+

## Building

## Testing
```
npm install
```

##### Running tests

To run all the tests

```
npm run test
```

To run a specific spec file

```
npm run test-spec ./Purchaseorder.e2e.js
```


#### Scenario

```
Load the http://automationpractice.com/index.php
 Navigate from homepage PLP category to subcategory
 click first element and  add the item to cart 
 Complete the checkout process and complete the order

```

## Additional Information
* [Webdriver API](https://webdriver.io/docs/api.html)
* [Mocha](https://mochajs.org/)
