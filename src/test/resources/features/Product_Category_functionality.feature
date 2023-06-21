
 Feature: Product Category CRUD Functionality
  @Sanity
 Scenario Outline: Category CRUD Tests
	Given I generate all test random value
	When I create a Category
	Then I verify category id and name
	And I update category with "<categoryName>" as category Name
	Then I verify Updated category name and Id
	Then I delete that category
	And I verify category is Deleted
	
	Examples:
	| categoryName|
	| test_cat_111 |
	| test_cat_222 |
	| test_cat_333 |
	| test_cat_444 |
	| test_cat_555 |
	| test_cat_666 |