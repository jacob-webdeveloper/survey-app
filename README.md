# T3A2-B: Full Stack App (Part B)
Deployed Site = https://survey-app-jacobk.netlify.app
Github Repo = https://github.com/jacob-webdeveloper/survey-app

## Development Environment Testing
During the development phase, user testing was conducted to ensure functionality, usability, and bug detection. The following methods were used:
1. Functional Testing
Tested CRUD operations (Create, Read, Update, Delete) to confirm tree survey data was handled correctly.
Verified correct data validation and error handling on forms.
Ensured proper integration of the frontend with the backend API.
2. UI/UX Testing
Conducted usability tests to assess the clarity of navigation and form inputs.
Adjusted styling (e.g., input spacing, button alignment) based on tester feedback.
3. Debugging and Fixes
Used developer tools and console logs to trace and fix errors.
Ran local unit tests for core functionality.

## Production Environment Testing
1. Real-User Testing
Collected feedback from actual users interacting with the live system.
Addressed reported issues, such as incorrect form submissions or slow responses.
2. Performance Testing
Monitored load times and optimized API calls where necessary.
Assessed server response times and database queries.
3. Error Handling in Production
Checked that incorrect inputs were properly flagged with error messages.
Verified the app gracefully handled missing or incorrect data.

## Explanation of code from TreeForm.js
One of the essential pieces of code in the Survey App is the function responsible for handling the submission of tree survey data. This function performs a network request to send form data to the backend API, ensuring that user inputs are properly stored in the database.

Event Handling `(e.preventDefault()):` Prevents the default form behavior to allow handling within JavaScript.

Data Preparation `(tree Object):` Collects user input values and structures them into an object.

Network Request `(fetch()):` Sends a POST request to the backend API with the survey data.

Headers `(Content-Type: application/json):` Ensures the request is properly formatted as JSON.

Error Handling `(try...catch):`

Checks if the response is successful `(response.ok)`.

If the request fails, updates error state and highlights empty fields.

If successful, resets form fields and dispatches the new tree data to update the state.


## Handling Empty Field Errors in Form Submission Challenge

During development, a common issue arose when users attempted to submit the form with missing fields. The backend API returned an error response, but the frontend did not properly highlight the fields that required input.

Solution:

To address this, the application was updated to:

Capture the `emptyFields` array from the backend response.

Use this array to dynamically apply an error class to the corresponding input fields.

Provide immediate visual feedback to the user, ensuring they know which fields need attention.

**Updated Code**
```
if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
```

This change greatly improved user experience by making error messages more intuitive and actionable, ensuring smoother data entry and reducing form submission issues.