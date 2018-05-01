# **[Doctor Lookup]**

#### By Adrian Messado
[Adrian Messado](https://github.com/adrianmess)
## Description
A website where users may enter a medical issue (ie: “sore throat”, "rash", etc.) into a form, submit it, and receive a list of doctors in your city (Portland or Seattle depending on where you are) who can treat their medical issue.

The BetterDoctor API will be used to retrieve this information.

## Specifications

| Specification | Input | Output |
| --- | --- | --- |
| Medical issue submitted and list of Dr's that support that issue are returned | Back Pain | List of Dr's in Portland that can treat Back Specification
| Name of Doctor submitted and list of Doctors with that name returned | Last-Name: Johnson | Returned: List of Dr's with Last-Name of Johnson

* If query response includes any doctors, a certain
  *  RETURN: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients
* If the API call results in an error, the application should return a notification that states what the error is.
* If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)

## Setup/Installation Requirements

* To view project code, _clone repository from_
* To view project, _open in web browser_
  *  https://adrianmess.github.io/doctor-lookup/

  ### Install project locally:

      * Clone this project
      *

#### API Key

You will need an API Key from BetterDoctor. Visit the [BetterDoctor API] (https://developer.betterdoctor.com/) site and click “Get a free API key”.
  After you sign up, your API key will be listed on the front page under **CREDENTIALS** (ex: “**Key** 22065b1d…..”) or under My Account > Applications.

  How to use your API Key:
    * Create a .env file in the root directory of the project.
    * Add the API key in the .env file as shown below. No brackets:
    ```
    exports.apiKey=[YOUR-API-KEY]
    ```

* To Install locally:
  * Clone this repository
  * Run npm install to install appropriate dependencies
  * Run npm start to run development environment

## Known Bugs
  * No known bugs at this time.


## Technologies Used

* HTML
* CSS
  * Bootstrap _(Bootstrap 4.1)_
* JavaScript
  * JQuery _(jQuery 3.2.1)_
* Node.js
* Webpack
* ESLint
* Jasmine
* Karma
* Babel
* BetterDoctor API

## License

* GPL

Adrian Messado © 2018
