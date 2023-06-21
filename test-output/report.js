$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Product_Controller_final.feature");
formatter.feature({
  "name": "Product Controller Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Product Controller Scenario Functionalities",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I generate test random value",
  "keyword": "Given "
});
formatter.step({
  "name": "I create a product with new  \u003cid\u003e and \"\u003cname\u003e\" and \"\u003csku\u003e\" and \u003cunitPrice\u003e and \u003cunitsInStock\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I verify product function after created",
  "keyword": "Then "
});
formatter.step({
  "name": "I update product with \"\u003cupdatesku\u003e\" and \u003cupdateunitsInStock\u003e and \u003cupdateUnitPrice\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "I verify get after update product",
  "keyword": "And "
});
formatter.step({
  "name": "I delete product",
  "keyword": "Then "
});
formatter.step({
  "name": "I get after delete product and verify statusCode 404",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "id",
        "name",
        "sku",
        "unitPrice",
        "unitsInStock",
        "updatesku",
        "updateunitsInStock",
        "updateUnitPrice"
      ]
    },
    {
      "cells": [
        "1",
        "Mango",
        "DF-2345",
        "15.00",
        "20",
        "DF- 0001",
        "16",
        "15.99"
      ]
    },
    {
      "cells": [
        "2",
        "Apple",
        "DF-3333",
        "3.99",
        "60",
        "DF- 0002",
        "45",
        "5.99"
      ]
    },
    {
      "cells": [
        "3",
        "Banana",
        "DF-4444",
        "2.99",
        "80",
        "DF- 0003",
        "80",
        "3.99"
      ]
    },
    {
      "cells": [
        "4",
        "Orange",
        "DF-5555",
        "5.99",
        "90",
        "DF- 0004",
        "90",
        "6.99"
      ]
    },
    {
      "cells": [
        "5",
        "Cherry",
        "DF-6666",
        "6.99",
        "95",
        "DF- 0005",
        "98",
        "7.99"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Product Controller Scenario Functionalities",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I generate test random value",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I create a product with new  1 and \"Mango\" and \"DF-2345\" and 15.00 and 20",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I verify product function after created",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I update product with \"DF- 0001\" and 16 and 15.99",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I verify get after update product",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I delete product",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I get after delete product and verify statusCode 404",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Verify Product Controller Scenario Functionalities",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I generate test random value",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I create a product with new  2 and \"Apple\" and \"DF-3333\" and 3.99 and 60",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I verify product function after created",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I update product with \"DF- 0002\" and 45 and 5.99",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I verify get after update product",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I delete product",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I get after delete product and verify statusCode 404",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Verify Product Controller Scenario Functionalities",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I generate test random value",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I create a product with new  3 and \"Banana\" and \"DF-4444\" and 2.99 and 80",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I verify product function after created",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I update product with \"DF- 0003\" and 80 and 3.99",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I verify get after update product",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I delete product",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I get after delete product and verify statusCode 404",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Verify Product Controller Scenario Functionalities",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I generate test random value",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I create a product with new  4 and \"Orange\" and \"DF-5555\" and 5.99 and 90",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I verify product function after created",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I update product with \"DF- 0004\" and 90 and 6.99",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I verify get after update product",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I delete product",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I get after delete product and verify statusCode 404",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Verify Product Controller Scenario Functionalities",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I generate test random value",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I create a product with new  5 and \"Cherry\" and \"DF-6666\" and 6.99 and 95",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I verify product function after created",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I update product with \"DF- 0005\" and 98 and 7.99",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I verify get after update product",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I delete product",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I get after delete product and verify statusCode 404",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});