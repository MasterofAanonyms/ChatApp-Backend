# ChatApp Backend API

## Project Overview

This repository contains the Express.js backend API for a React Native chat application. It is a practical classroom project for the HDP 1 subject in the BSc (Hons) Software Engineering – 2nd Year program.

The backend API is developed by the lecturer at Java Institute for Advanced Technology together with students, and it is intended as a reference for students who miss class or miss parts of the practical code.

## Institute / Subject Context

- Course: **HDP 1**
- Program: **BSc (Hons) Software Engineering – 2nd Year**
- Institute: **Java Institute for Advanced Technology**

This repository supports classroom learning by showing how to build the server side of a chat app project.

## Purpose of the Repository

- Provide a reference implementation of the backend API used in the practical class.
- Help students review the code when they miss a lecture or need to understand the server logic.
- Show how to connect a Node.js/Express backend with a React Native chat application.

## What Students Will Learn

- Installing and running a TypeScript Express backend.
- Using `express.json()` for API routes.
- Connecting to a MySQL database with `mysql2`.
- Building authentication and chat data endpoints.
- Understanding the structure of a simple backend API.

## Prerequisites

Students should have:

- Node.js installed (recommended version 24 or newer)
- npm available from Node.js installation
- MySQL installed and running locally
- Basic knowledge of Git and GitHub

## Installation

1. Open a terminal in this repository folder.
2. Install the backend dependencies:

```bash
npm install
```

3. Start the backend API:

```bash
npm start
```

4. The server will run on:

```text
http://localhost:3000
```

## Backend API Notes

- Main server file: `src/index.ts`
- Routes:
  - `/user` for login and signup
  - `/chat` for fetching chat summaries
- Database configuration is in `src/db.ts`
- This repository is the backend API only; the mobile app front-end is stored in a separate React Native repository.

## How to Clone the Repository

Use Git to clone this repository from GitHub:

```bash
git clone https://github.com/kavindu-kodikara/Chat-App.git
```

Then change into the backend folder if needed:

```bash
cd ChatApp
```

## How to Download as ZIP

1. Open the GitHub repository page in your browser.
2. Click the green `Code` button.
3. Select `Download ZIP`.
4. Extract the ZIP file to a folder on your computer.
5. Open the extracted folder in a terminal or code editor.

## How to Run the Expo React Native App

This repository does not contain the Expo app code itself. The Expo React Native app is available in the related project repository.

To run the Expo app, follow these general steps in the React Native app repository:

1. Open the app repository folder.
2. Install dependencies:

```bash
npm install
```

3. Start Expo:

```bash
npx expo start
```

4. Follow the Expo instructions to open the app on a device, simulator, or Expo Go.

If you are using the combined project from class, make sure the backend API is running on `http://localhost:3000` before starting the Expo app.

## How to Use Lecture-Day Commits

The commit history is organized by lecture day, for example:

- `Day - 28`
- `Day - 29`

To find the code from a specific lecture day:

- Use GitHub commit history on the repository page.
- Look for commit messages with `Day - XX`.
- Use `git log --oneline` in your terminal to review commits.

Example:

```bash
git log --oneline
```

This helps you locate the version of the code that was discussed during a particular class.

## Project Structure

```
ChatApp/
  package.json
  tsconfig.json
  src/
    db.ts
    index.ts
    routes/
      chat.ts
      user.ts
```

- `package.json`: project dependencies and start script
- `tsconfig.json`: TypeScript configuration
- `src/index.ts`: application entry point
- `src/db.ts`: MySQL database connection
- `src/routes/chat.ts`: chat-related API routes
- `src/routes/user.ts`: user login and signup API routes

## Notes for Students

- Use this repository as a classroom reference when you miss a lecture or need to review the backend code.
- Read the route files to see how the API handles requests and database queries.
- If you are new to Git or GitHub, practice cloning the repo, opening the code, and running `npm install`.

## Contact

For course-related questions, please follow your lecturer's instructions in class. This repository is provided by Java Institute for Advanced Technology to support your practical learning.
