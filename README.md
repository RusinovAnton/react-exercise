# react-exercise

## Task

Implement web app, using this repo as boilerplate.
Web app basically will download `MOCK_DATA.json` and render it into Table (`/src/Table.js`) component. It should meet following list of criteria:

### Basic:

- User should data in table with following columns:
  - **Avatar**: field - `avatar` - show image
  - **Name**: field `first_name last_name`
  - **Gender**: field - `gender`
  - **Age**: field - `birthDate`
  - **Email**: field `email` - add green check icon if `emailValidated` is true
  - **IP**: field - `ip_address`
  - **Registered**: field `created_at` - display in words as `<date> ago`
- User should be able to sort by columns: `Name`, `Gender`, `Age`, `Registered`
- User should be able to search items by any field with search input.
- User should see count of items that are currently visible in table

### Advanced:

- User should be able to sort by several sortable columns at once
- Table rendering should be optimized - don't render whole data array
- Table should have nice looking design

## How to use boilerplate

- clone repo:
  `git@github.com:RusinovAnton/react-exercise.git`
- install dependencies and run with commands:
  `yarn && yarn start` or `npm install && npm start`
- commit your changes
- make package archive with:
  `yarn pack` or `npm pack`

## Mock Data

Mock data has list of users. User object has following shape:

```json
{
  avatar
  birthDate
  created_at
  email
  emailValidated
  first_name
  gender
  id
  ip_address
  last_name
}
```
