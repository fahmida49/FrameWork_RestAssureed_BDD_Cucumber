package step_Definitons;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.response.Response;

import static io.restassured.RestAssured.*;
import static org.junit.Assert.assertEquals;

import java.util.Random;

import org.json.JSONObject;

import base.Base;

public class Product_Controller_Final extends Base {
	static {
		RestAssured.filters(new RequestLoggingFilter(), new ResponseLoggingFilter());
	}
	String fruiteName;
	int random_id;
	double unitPrice;
	int unitsInStock;
	String name;
	int catid;
	String sku;
	
	@Given("I generate test random value")
	public void i_generate_test_random_value() {
		Random random = new Random();
		random_id = random.nextInt(100000);
	}

	@When("I create a product with new  {int} and {string} and {string} and {double} and {int}")
	public void i_create_a_product_with_new_and_and_and_and(int id, String fruiteName, String skuNo, double uPrice,
			int uStock) {

		catid = id;
		name = fruiteName;
		sku =skuNo;
		unitPrice = uPrice;
		unitsInStock = uStock;
		
		JSONObject requestBody = new JSONObject();
		requestBody.put("active", true);
		requestBody.put("category", new JSONObject()
				                         .put("id", catid));
		requestBody.put("dateCreated", "2022-03-23T18:09:42.940Z");
		requestBody.put("description", "Pineapple");
		requestBody.put("id", random_id);
		requestBody.put("imageUrl", "C:\\Image Folder\\download (1).jpeg");
		requestBody.put("lastUpdated", "2023-03-23T18:09:42.940Z");
		requestBody.put("name", fruiteName);
		requestBody.put("sku", skuNo);
		requestBody.put("unitPrice", uPrice);
		requestBody.put("unitsInStock", uStock);

		Response response = given().contentType("application/json").body(requestBody.toString()).when()
				.post("http://skyschooling.com:8081/api/v01/product");

		JSONObject resBody = new JSONObject(response.body().asString());
		random_id = resBody.getInt("id");
		//System.out.println("resBody" + random_id);
		
	}

	@Then("I verify product function after created")
	public void i_verify_product_function_after_created() {
		Response response = given().when().get("http://skyschooling.com:8081/api/v01/product/" + random_id);
		assertEquals(response.statusCode(), 200);
	}

	@Then("I update product with {string} and {int} and {double}")
	public void i_update_product_with_and_and(String usku, int updateStock, double updateUPrice) {
		
		sku = usku;
		unitsInStock = updateStock;
		unitPrice = updateUPrice;

		JSONObject requestBody = new JSONObject();
		requestBody.put("active", true);
		requestBody.put("category", new JSONObject().put("id", catid));
		requestBody.put("dateCreated", "2022-03-23T18:09:42.940Z");
		requestBody.put("description", "Pineapple");
		requestBody.put("id", random_id);
		requestBody.put("imageUrl", "C:\\Image Folder\\download (1).jpeg");
		requestBody.put("lastUpdated", "2023-03-23T18:09:42.940Z");
		requestBody.put("name", fruiteName);
		requestBody.put("sku", usku);
		requestBody.put("unitPrice", updateUPrice);
		requestBody.put("unitsInStock", updateStock);

		Response response = given().contentType("application/json").body(requestBody.toString()).when()
				.post("http://skyschooling.com:8081/api/v01/product");

		JSONObject resBody = new JSONObject(response.body().asString());
		random_id = resBody.getInt("id");
		//System.out.println("resBody" + random_id);
		//printAllresponse(response);
	}

	@Then("I verify get after update product")
	public void i_verify_get_after_update_product() {
		Response response = given().when().get("http://skyschooling.com:8081/api/v01/product/" + random_id);
		assertEquals(response.statusCode(), 200);
		
	}

	@Then("I delete product")
	public void i_delete_product() {
		Response response = given().when().delete("http://skyschooling.com:8081/api/v01/product/" + random_id);
		assertEquals(response.statusCode(), 204);
		
	}

	@Then("I get after delete product and verify statusCode {int}")
	public void i_get_after_delete_product_and_verify_statusCode(Integer int1) {
		Response response = given().when().get("http://skyschooling.com:8081/api/v01/product/" + random_id);
		assertEquals(response.statusCode(), 404);
		
	}

}// class
