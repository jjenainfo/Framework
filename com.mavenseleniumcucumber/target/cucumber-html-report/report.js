$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/teststep.feature");
formatter.feature({
  "name": "FR Plus  page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Test the Frplus login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "open chrome",
  "keyword": "Given "
});
formatter.match({
  "location": "TestSteps.open_chrome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid user name and password",
  "keyword": "When "
});
formatter.match({
  "location": "TestSteps.user_enter_valid_user_name_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login",
  "keyword": "And "
});
formatter.match({
  "location": "TestSteps.click_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.user_should_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on fr wallet option",
  "keyword": "And "
});
formatter.match({
  "location": "TestSteps.click_on_fr_wallet_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the application",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.close_the_application()"
});
formatter.result({
  "status": "passed"
});
});