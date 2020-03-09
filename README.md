# Contact management

This project is an exercise to create a front-end application that generates sortable list of contacts based on data received from a back-end application that serves the data.

## TL;DR:

Prerequisites:

- Get [Node.JS](https://nodejs.org/en/)
- Get the [backend](https://github.com/martintints/ContactsDemo) for this application
- Recommended browser: [Google Chrome](https://www.google.com/chrome/index.html)

Steps to run **this** project:

1. go to project directory
2. execute `npm install` to install the dependencies
3. execute `npm run start` to run the project

**N.B.:** Don't forget to run the backend app...

## Exercise description

### Context

**Halvaa OÜ** is a fictional company that focuses on producing [halva](https://en.wikipedia.org/wiki/Halva). The task at hand is to create an application for Halvaa OÜ, having **contact management** as one of it's features.

### Task

Create a web application for contact management. In addition, shortly describe the thought process behind the application.
If possible, use [ReactJS](https://reactjs.org/) for the application (best practices are advised). If the framework is absolutely unfamiliar, it is possible to use other widely used technologies.

### Requirements

- User-friendly form that shows a list of contacts
- Contacts should be sortable (manually). Sorting should be _persistent_, keeping the changes after reloading the application.

### API

Please use a back-end solution specifically designed for this exercise, which can be found on [GitHub](https://github.com/martintints/ContactsDemo). Back-end solution is cross-platform (Windows/Linux/Mac) and can be run locally. Database contacts table is initialized with four example rows.

### Bonus tasks

Implementing the following features is not required, but it might be helpful for the overall application.

- Adding new / editing existing contacts
- Deleting contacts

## Implementation & thought process

Here are my thoughts, given the context of a larger application, for which I am to build only a certain part.

### 1 - Jumpstarting

To get started without spending too much time on configuration and whatnot, I used **[`create-react-app`](https://reactjs.org/docs/create-a-new-react-app.html)**, stripping it from some stuff that I don't need right away. Also, for the very same reasons **[React Bootstrap](https://react-bootstrap.github.io/)** came in handy. Also, its simple yet consistent layout and stylized components allow me to focus more on the functionality of the application from this point.

### 2 - Code consistency

To keep the code pretty and without any significant errors, I have set up **[ESLint](https://eslint.org/)** in parallel with **[Prettier](https://prettier.io/)** as a developer dependency. I do use VS Code with the approriate extension, so my editor configuration for this project is also stored in `/.vscode` folder.

### 3 - API requests

**[Axios](https://github.com/axios/axios)** is my way to go around service connections. Even though there is only one service at the time, each should be stored as a collection of the following files in a dedicated folder under `/src/services`:

- `base` - Some basic configuration (endpoint, headers)
- `apiRequests` - Basic mapping of known requests.
- `index` - Specific functions that should request and return/process the response data.

### 4 - Routing

It's nice to have different pages, not just one, so I took **[`react-router-dom`](https://www.npmjs.com/package/react-router-dom)** and put all the page content into `/src/pages` folder. Pages should be distributed in their groups as well. Each folder dedicated to a page component should also contain any resources that are relevant to that specific page (e.g.: _About_ page).

### 5 - Sorting and order persistence

Drag and drop functionality is pretty simple and straightforward, implemented using **[React DnD](https://react-dnd.github.io/react-dnd/about)**. As for persistence - last changed contact order is stored in browser local storage as a comma-separated string of contact id-s. This should work for most use cases.

### 6 - Considerations for future

First of all, I would not start implementing contact deletion before implementing contact creation.
For new contact creation I would probably use **[Formik](https://jaredpalmer.com/formik/)**. Whether to make it as a separate page or a modal window - this is still up for debate. One thing is for sure - edit/update of an existing contact should happen within the same component as the creation. Contact deletion should definitely be just a confirmation pop-up/modal, there's just nothing else to it.

When it is going to come to fullfillment of the secondary tasks, the persistence of contact order should also be revised and improved.

In the long run, to supress the amount of requests I would probably need to start using **[Redux](https://redux.js.org/)** at some point too and only fetch possibly updated data when needed.

Given the exercise context, a login screen would be very nice to have as well.

## Status, issues, etc...

### Current status

- Main objective should be completed
- Secondary objectives are yet incomplete

### Current issues

- CORS requests fail in **Mozilla Firefox**, probably due to certification issue (backend).
- Header fails to collapse on selected item on mobile breakpoint.
- Order persistence is stored in the browser. It is possible to also `patch` indexes in the `sequence` attribute, but without a general bulk request the number of individual requests scales with the amount of contacts in the database at the moment of runtime.

### TODO-s and considerations overview

- Fix the header collapse issue
- Finish secondary objectives
- Comment the code
- Implement possible improvements to page routing (and possibly structure too)
- Automated sorting options
- Login screen
