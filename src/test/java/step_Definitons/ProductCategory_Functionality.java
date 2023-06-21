package step_Definitons;

import static org.junit.Assert.assertEquals;

import java.util.HashMap;

import org.json.JSONObject;

import base.Base;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.response.Response;
import static io.restassured.RestAssured.*;

public class ProductCategory_Functionality extends Base {
	
	static {
		RestAssured.filters(new RequestLoggingFilter(), new ResponseLoggingFilter());
	}
	
	String category_name;
	int category_id;
    String catName1;
    
	@Given("I generate all test random value")
	public void i_generate_all_test_random_value() {
		category_name = "test_category_name_" + generateRandomNumber(100000);
	}

	@When("I create a Category")
	public void i_create_a_Category() {

		HashMap<String, String> requestBody = new HashMap<String, String>();
		requestBody.put("categoryName", category_name);

		Response response = given().contentType("application/json").body(requestBody).when()
				.post("http://skyschooling.com:8081/api/productCategory");
		assertEquals(response.statusCode(), 201);

		JSONObject resBody = new JSONObject(response.body().asString());
		category_id = resBody.getInt("id");
		
		
	}

	@Then("I verify category id and name")
	public void i_verify_category_id_and_name() {
		Response response = given().when().get("http://skyschooling.com:8081/api/productCategory/" + category_id);

		assertEquals(response.statusCode(), 200);

		JSONObject resBody = new JSONObject(response.body().asString());
		int id = resBody.getInt("id");
		String catNameValue = resBody.getString("categoryName");

		assertEquals(category_id,id );
		//assertEquals(catNameValue, category_name);
		
		assertEquals(category_name, catNameValue);
		
		
	}

	@Then("I update category with {string} as category Name")
	public void i_update_category_with_as_category_Name(String catName) {

		catName1 = catName;
		HashMap<String, String> requestBody = new HashMap<String, String>();
		// category_name = catNameValue;
		requestBody.put("categoryName", catName);

		Response response = given().contentType("application/json").body(requestBody).when()
				.put("http://skyschooling.com:8081/api/productCategory/"+category_id);

		assertEquals(response.statusCode(), 200);
		System.out.println(requestBody);

		JSONObject resBody = new JSONObject(response.body().asString());

		assertEquals( catName, resBody.getString("categoryName"));
		System.out.println(resBody.getString("categoryName"));
		
		
		
	}

	@Then("I verify Updated category name and Id")
	public void i_verify_Updated_category_name_and_Id() {
		Response response = given().when().get("http://skyschooling.com:8081/api/productCategory/" + category_id);

		assertEquals(response.statusCode(), 200);

		JSONObject resBody = new JSONObject(response.body().asString());
		int id = resBody.getInt("id");
		String catNameValue = resBody.getString("categoryName");

		assertEquals(id, category_id);
		assertEquals(catNameValue, catName1);
		
		//printAllresponse(response);

	}

	@Then("I delete that category")
	public void i_delete_that_category() {
		Response response = given().when().delete("http://skyschooling.com:8081/api/productCategory/" + category_id);
		assertEquals(response.statusCode(), 204);
	}

	@Then("I verify category is Deleted")
	public void i_verify_category_is_Deleted() {

		Response response = given().when().get("http://skyschooling.com:8081/api/productCategory/" + category_id);
		assertEquals(response.statusCode(), 404);

	}

}// class
