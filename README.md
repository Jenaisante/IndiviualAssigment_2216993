# IndiviualAssigment_2216993
Assignment 1
1. Javascript fuction
-The JavaScript function is defined in the script tag within the HTML document.
When the "Submit" button is clicked, the myFunction function is called.Inside the function, values from various form fields are retrieved using document.getElementById('elementId').value.
The function checks whether all the required fields have been filled out by verifying if the retrieved values are truthy.

2. Alert
-If all required fields have been filled out, an alert is displayed, providing information about the form submission. This includes details about when the salary deduction will take effect (from the start date until the end date or until further notice).
-If any required field is missing (i.e., at least one of the values is falsy), another alert is shown, instructing the user to complete all required fields before submitting the form.

3. For submit trigger
-The form submission is triggered by clicking the "Submit" button.
-The button has an onclick attribute that calls the myFunction function when the button is clicked.

In summary, the JavaScript function is designed to validate the form fields and provide appropriate feedback to the user through alert messages based on whether the form is successfully submitted or if there are missing required fields.
