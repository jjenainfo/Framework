package stepdefination;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestSteps {
	WebDriver driver;
	//new commit
	 @Given("^open chrome$")
	    public void open_chrome()  {
		 System.setProperty("webdriver.chrome.driver",".//DRIVER//chromedriver.exe");
		 driver= new ChromeDriver();
		 driver.manage().window().maximize();
		 driver.get("http://frplustest.dtdc.com/");
		 
		 
	        
	    }
	 @When("^user enter valid user name and password$")
	    public void user_enter_valid_user_name_and_password() {
		 driver.findElement(By.id("sLogin")).sendKeys("bf014");
		 driver.findElement(By.id("sPass")).sendKeys("dtdc@123");

	        
	    }
	  @And("^click login$")
	    public void click_login()  {
			 driver.findElement(By.id("btnLogin")).click();

	       
	    }
	  @Then("^User should able to login$")
	    public void user_should_able_to_login()  {
		 
		 String str =driver.getTitle();
		 System.out.println(str);
		 Assert.assertTrue(str.contains("frplus.dtdc.com"));
		  
	        
	        
	  }
	  @And("^click on fr wallet option$")
	    public void click_on_fr_wallet_option() {
		  driver.findElement(By.xpath("//*[@class='menuBig hover'][2]")).click();
	        
	    }
	  @Then("^close the application$")
	    public void close_the_application() throws Throwable {
	        driver.quit();
	    }



}
