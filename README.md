# GitHub Profile Viewer

A simple and responsive web application that allows users to search for GitHub profiles and view important account information using the GitHub API.

This project demonstrates how to work with APIs, handle asynchronous JavaScript, and dynamically update the DOM based on user input.

![GitHub Profile Viewer](assets/git.png)

## Features

* Search for any GitHub username.
* Fetch user information directly from the GitHub API.
* Display profile details instantly.
* View repository and follower statistics.
* Open the user's GitHub profile in a new browser tab.
* Responsive design for desktop, tablet, and mobile devices.

## Profile Information Displayed

The application displays the following information:

* Profile Picture (Avatar)
* Username
* Full Name
* Bio
* Location
* Public Repositories
* Followers
* Following
* GitHub Profile Link

## Project Structure

github-profile-viewer/
├── assets/
│   └── git.png
├── index.html
├── style.css
├── profile.js
└── README.md

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* GitHub REST API
* Fetch API

## How It Works

1. Enter a GitHub username in the search field.
2. The application sends a request to the GitHub API.
3. User information is retrieved and processed.
4. The profile details are displayed on the page.
5. Users can click the profile link to visit the GitHub account.

## Example Search

Example username:

```text
octocat
```

The application will display information about GitHub's official example account.

## Learning Objectives

This project helps developers practice:

* Working with APIs
* Fetching remote data
* Using the Fetch API
* Asynchronous JavaScript (Async/Await)
* DOM Manipulation
* Event Handling
* JSON Data Processing
* Error Handling
* Responsive Web Design

## Future Improvements

* Search multiple users simultaneously
* Repository filtering and sorting
* GitHub activity feed
* User comparison feature
* Save favorite profiles
* Advanced profile analytics

## Author

Built using HTML, CSS, JavaScript, and the GitHub API.

Feel free to fork this project, contribute improvements, and customize it to make it your own.
