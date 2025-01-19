
# Contact Management App

  

## Overview

  

This project is a modern web application built with the following technologies:
-  **React**
-  **Vite**
-  **TypeScript**
-  **TanStack Query**
-  **TanStack Router**
- **TanStack Form**
- **TailwindCSS**
- **JSON-Server**


## Prerequisites

  

Make sure you have the following installed on your system:

  

- [Node.js](https://nodejs.org/) (v16 or later)

- npm or yarn (for package management)

  

## Getting Started
  

Follow these steps to set up and run the project locally:


### 1. Install Dependencies

  

Using npm:

  

```bash

npm  install

```
  

### 2. Start the app

  

Using npm:

  

```bash

npm  start

```

  

The application will be accessible at `http://localhost:5173` by default. And mock json-server will be run on `http://localhost:3000/`.

  

## Scripts

  

The following scripts are available:

  

-  `start`: Starts the app, while concurrently running mock server.

-  `start:client`: Runs only client side of the app (not functional).

-  `start:server`: Runs only server side of the app.

## Mock Server

- There is a db folder located in the root of the project, with db.json inside it, which json-server uses for mock API's. 
  

## Project Structure

  

```plaintext

src/

	├──api/
		├── services # used for API request helper functions(in our case axios call functions).
		├── hooks # hooks specifically designed for getting data from API requests, using 	TanStack query

	├── components/ # Reusable UI components

	├── pages/ # Application pages that are declared in router.tsx file(only layout component is outside of this folder, for personal preference reasons)

	├── hooks/ # Custom hooks

	├── constants/ # constant variable files

	├── context/ # React context related files

	├── models/ # TypeScript types and interfaces

	├── assets/ # Static assets (images, styles, etc.), currently only react.svg icon.

	├── utils/ # utility functions that don't depend on any code context 
	
	├── App.tsx # Main application component

	├── index.tsx # Application entry point
	
	├── index.css # Main styles are here

	└── router.tsx # TanStack router configuration(root route, child routes, etc...)

```
Project also uses barelling system with almost every major folder having their own respective index.ts for exporting code.

All components are placed in their respective folders(reason for this is, if we decided to write tests, it would be a clean approach to have each components test file next to the component)

## Naming Conventions

- All folders should use kebab-case convention
- All components should be named using PascalCase convention
- Any other file that isn't a react component should use kebab-case convention
- Interfaces and types should have 'Model' postfix, except props models (e.g. ContactModel) and their folders should have '.model.ts' postfix
- All hooks and hook file names should have 'use' prefix
- Constant files should have '.constant.ts' postfix
- Util files should have '.util.ts' postfix
  

## Configuration

  

-  **Vite**: All build and development configurations can be modified in `vite.config.ts`.

-  **TypeScript**: Update `tsconfig.app.json` for TypeScript-specific configurations.

- **Eslint**: Update `eslint.config.js` for linting
  

## Improvements for the app
Overall this application could have been made in a much cleaner and easier way, as the structure of the app is too complex for such a small app, but this was done for demo purposes (so it should be ok :) ).

#### At the same time following steps could be taken to improve the app:
- Double check all code and add missing types
- Write unit tests for better maintainability
- Add additional linting rules and regulations to improve consistency in the app

And a lot more...

# THANK YOU FOR VIEWING MY APP <3