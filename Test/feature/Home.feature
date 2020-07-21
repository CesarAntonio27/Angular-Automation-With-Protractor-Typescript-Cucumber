Feature: To work with home page 


@smoke # smoke es un tag
Scenario: click course of application
    And I get all the heading 
    And I click the 'selenium framework development' course 
    Then I should see 'Selenium framework development' course in coursedetails page
    

@regression # regression es un tag
Scenario: click course of application in second time
    And I get all the heading 
    And I click the 'selenium framework development' course 
    Then I should see 'Selenium framework development' course in coursedetails page
    