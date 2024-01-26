# Project Details

> This repo is strictly for the *Frontend Grow Therapy Assessment*, and was developed by *Jason Levine*

# Components

## SearchBar
![Mock search bar image](/src/assets/SearchBarMock.png)

This bar appears at the top of the page and is the entrypoint to displaying the results.  The Search Bar is made up of 3 smaller components, as well as a Search button. This button commits the search given the parameters specified in the DatePicker, ResultCountPicker, and CountryPicker:

### DatePicker
![Mock date picker](/src/assets/DatePickerMock.png)

This widget allows the user to select a specific date to filter results by. Defaults to yesterday's date.

### ResultCountPicker
![Mock result counter picker](/src/assets/ResultCounterPickerMock.png)

This widget allows the user to select the number of results they would like to see (25, 50, 75, 100, or 200). Defaults to 100.

### CountryPicker
![Mock country picker](/src/assets/CountryPickerMock.png)

This widget allows the user to select a country to filter results by. Defaults to United States.

## ResultList
![Mock main display](/src/assets/ResultListMock.png)

This is the main body of the page, where results are displayed.  This contains a list of ResultChip components, detailed below.


### ResultChip
![Mock result chip](/src/assets/ResultChipMock.png)

This is a single result returned from the API.  It includes:
1. The index of the result
2. The name of the page
3. The viewcount for the page



## Pagination
![Mock pagination](/src/assets/PaginationMock.png)

This allows the user to select which page of results they want to see.

---

## Usage and Available Scripts
To install dependencies initially, run:

### `npm install`

Then within the project directory, you can run:

### `npm start`

Which runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

---

*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
