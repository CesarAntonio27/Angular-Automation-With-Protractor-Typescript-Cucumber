Feature: To work with home page 


@smoke
Scenario: click course of application

    Given I navigate to application
    And I get all the heading 
    And I click the 'selenium framework development' course 
    Then I should see 'Selenium framework development' course in coursedetails page
    