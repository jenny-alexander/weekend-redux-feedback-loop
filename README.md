# Speak Up! Feedback Form

## Description

The objective of this challenge was to build a feedback form application that uses the **React** framework and the **Redux** library.

The feedback form should demonstrate the CRUD principles in actions.

* **C:** Create new feedback via the feedback form and submit to the database.
* **R:** Get the feedback from the database and display to to the administrator via admin form.
* **U:** Update existing feedback in the admin form by setting the flagged field to true or false. 
* **D:** Delete existing feedback in the admin form.
*All of the CRUD actions take place against a PostgreSQL database.*

The user's ratings are stored in a **redux store** until the user is ready to hit the Submit button and send the data to the database.

**UI:** The feedback form was created using Material UI components.

## Feedback Form demo

![Feedback Form application](/public/images/redux-feedback-form.gif)

## Admin Form demo

![Admin Form application](/public/images/redux-feedback-admin.gif)

## Screenshot of database

![Feedback database table](/public/images/prime_feedback_database.png)

## Installation

In order to get the feedback form up and running, do the following:

1. Download code locally from GitHub (fork & clone).
2. Open a terminal from the project location and type 'npm install'. This will install all of the necessary dependencies that the app needs to function properly.
3. Create the database and corresponding table:

* Using your favorite relational database client (I use Postico(<https://eggerapps.at/postico/>), go to the area/tab that allows you to run a query. Run the first query found in the *data.sql* file. This will create the prime_feedback database.

* Then, within the prime_feedback database, run the second query found in the *data.sql* file. This will create the feedback table.

4. Launch the application locally.

* Go back to your terminal and type 'npm start server'. This will start a local server on port 5000.
* Open another terminal session (still at your project location) and type 'npm start client'. This will start the feedback form on port 3000.

## How-to-use Feedback Form

1. From the main page, click on the 'Start' button.

2. The user can navigate through the various form pages by hitting the 'Next' button. They will enter a rating for: feeling, understanding and support. These are mandatory and the user won't be able to navigate further until they are entered.

3. The last entry is for comments. These are optional.

4. A review page is displayed to the user showing what they entered. The user can navigate back to change a rating and/or the comments.

5. Once the user is satisfied with the feedback, they will hit the 'Submit' button and the feedback will be sent to the database.

## How-to-use Admin Form

1. Navigate to the admin form via: https://localhost:admin

2. The admin user is presented with a list of all feedback submitted to the database by users.

3. The admin user can click on the red flag button to flag feedback for review.

4. The admin user can click on the garbage can icon to permanently delete the feedback from the database.

## Built With/Using

* HTML/CSS/JavaScript
* React
* Redux
* Material UI
* Axios
* Node.js
* Express
* Postgresql

If you have suggestions or questions, please email me at <jenny_alexander@icloud.com>.