package base;

import java.util.Random;

import io.restassured.response.Response;

public class Base {


	//public static WebDriver driver; //default
	public int generateRandomNumber(int n) {
		Random rand = new Random();
		return rand.nextInt(n);
		
        // Generate random integers in range 0 to 9999999
		//int rand = rand.nextInt(10000000);
		//return rand;
	
//	
//	}
//	
//	public void printAllresponse(Response response) {
//		response.then().log().all();
	}
}//class
