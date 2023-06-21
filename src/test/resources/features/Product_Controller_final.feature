Feature: Product Controller Functionality

@Sanity

Scenario Outline: Verify Product Controller Scenario Functionalities

Given I generate test random value
When I create a product with new  <id> and "<name>" and "<sku>" and <unitPrice> and <unitsInStock>
Then I verify product function after created
Then I update product with "<updatesku>" and <updateunitsInStock> and <updateUnitPrice> 
And  I verify get after update product
Then I delete product
Then I get after delete product and verify statusCode 404

Examples:
 | name |   sku   | unitPrice | unitsInStock | updatesku | updateunitsInStock | updateUnitPrice |id|
 |Mango |DF-2345  |  15.00    |    20        | DF- 0001  |  16                |   15.99         |1 |
 |Apple |DF-3333  |  3.99     |    60        | DF- 0002  |  45                |   5.99          |2 |
 |Banana|DF-4444  |  2.99     |    80        | DF- 0003  |  80                |   3.99          |3 | 
 |Orange|DF-5555  |  5.99     |    90        | DF- 0004  |  90                |   6.99          |4 |
 |Cherry|DF-6666  |  6.99     |    95        | DF- 0005  |  98                |   7.99          |5 |