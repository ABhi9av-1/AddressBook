# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
Assignment

Build an Address Book web app using React and TypeScript that follows GOV.UK Design System, emphasizing accessibility, semantic HTML, and form usability

Core Requirements

1) Tech stack:

React.js + typescript

React-router-dom for routing

Optional: Use govuk-frontend via npm or CDN

JSON placeholder: https://jsonplaceholder.typicode.com/users

2) Pages and Routes:                                 
Page                 	URL                    	Purpose 
Home	                /    	                    View and manage addresses 
Address Details	/details/:id?          Create or Edit address 
		

 
3) Home Page

•	Show a heading: Address book

•	List of people with:

    o	Name, email, phone 
    o	"Edit" and "Delete" links 


•	"Add a new address" as a primary button linking to/details

4) Address Details Page


•	GOV.UK-formatted form with labels, hint texts, and error messages

•	Fields:

      • Full name 

      •	 Email 

      •	 Phone number 

     •	Street address 

•	Buttons: 

   •	Save and continue (primary)  

   •	Delete address (secondary) 

   •	Cancel (link back to Home) 

5) Mobile-first Design

•	Start with styles that work well on mobile

•	Use GDS utility classes and components that adapt to screen size.

6) Use GDS Grid System

•	GDS provides a 12-column responsive grid with classes like:

•	Grid adjusts automatically for small vs large screens.

7) Responsive Typography & Layout

•	Use default GDS typography classes (govuk-heading-l, govuk-body, etc.)

•	Avoid fixed widths or heights. Use %, em, rem, or GDS max-width utilities:

8) Flexible Components

Ensure these elements adapt:

•	Buttons span 100% width on mobile if needed

•	Tables/lists turn into cards or scrollable rows

•	Forms are vertically stacked with proper spacing

9) Keyboard & Touch Accessibility

•	Large tap targets

•	Focus styles for keyboard users

•	Use <button> and <a> appropriately

10) Accessibility and GDS Guidelines

•	Use semantic HTML5 (e.g. <main>, <form>. <fieldset>)

•	All inputs have associated <label>s

•	Button use govuk-buttons classes

•	Errors follows GDS format: error summary + field-level messages

11) State management

•	Keep address list in top-level component state or context

•	No need to persist to backend (in-memory or optional local Storage)

12) Bonus features

•	Persist data using localStorage

•	Pagination (4 entries per page)

•	Use govuk-react or govuk-frontend for components

•	Tests with @testing-library/react

•	Form validation with inline errors   



give me full code with file structure
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
