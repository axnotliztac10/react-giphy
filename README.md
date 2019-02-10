# React Series Challenge

React proficiency challenge. Using the provided libraries and templates create a Gimpy Client that matches to the best of your capacity what is described in the deliverables section.


#### What we are expecting from you is:
- Use [Giphy API](https://developers.giphy.com/docs)
- Use styled components for styling
- Use enzyme and jest for testing
- Use React Router and React 16 (already included in the boilerplate code)
- Use Redux Saga for API requests
- Use Redux for your application's state management 

## Delivery before Sunday 11:59pm
Important. Constantly commit your code.

- Home View
  - It displays the trending GIFs using Giphy Trending API.
  - It has a search bar, which uses Giphy Search API.
  - Each GIF may be saved as favorite in the Redux state, and also can be removed from the same call to action.
  - Each GIF should display if it is already marked as favorite.

- Your Favorites GIFs View
  - It displays the GIFs that you previously selected, which comes from the Redux state.
  - It has a search bar, which filters from the Redux state.
  - Each GIF may be removed from favorite in the Redux state.

- Style your views using styled components.
  - Remove all CSS from the boilerplate code.

- Unit Testing
  - Create tests for your application
  - Coverage must be 20% or more

## Restrictions
- Don’t include extra dependencies (lodash, ramda).
- Minimize the use of React Components internal state.
- Application must preserve the state for favorites. This means that if your refresh the page, it must display the ones that you previously selected.

## Code Review
- Fork this project.
- You must open a pull request (PR) against this repo (master branch) for each of your deliveries.
- If you send a commit after the deadline we won't take it into account for the evaluation.

## TL;DR
1. Use Giphy API
2. Home ListView
  - Trending API
  - Search API
3. Favorite ListView
  - Redux State List
  - Redux State Search
5. Unit Testing
  - Coverage 20%
6. Styling
  - Use styled components
7. Include the slides in your commit, for presenting purposes.
  
 Wizeline react-series-challenge.

## Presentation
https://drive.google.com/open?id=1qIXMUH7LIbVN3Qqyh8bLOTrPRciQ12pZ3X1ZXv5NECM