Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A web browser is at the saucelabs login page
    Scenario: Success Login
        When A user enters the username "standard_user", the password "secret_sauce", and clicks on the login button
        Then the url will contains the inventory subdirectory
    Scenario: Checkout
        When A user enters the username "standard_user", the password "secret_sauce", and clicks on the login button
        When user adds items
        Then The user will be directed to the checkout process
 