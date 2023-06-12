# Calendar App

This is a React.js application for a Calendar app that allows users to add and edit reminders.

## Features

- View a monthly calendar with clickable dates.
- Add new reminders for specific dates.
- Edit existing reminders.
- Set reminders with a title, date, time and city.
- View reminders on the calendar.
- Delete reminders.
- View the forecasted weather and temperature for a given city on the given date and time.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/domiebett/calendar-react-challenge.git
```

2. Navigate to the project directory:

```bash
cd calendar-react-challenge
```

3. Install the dependencies:

```bash
npm install
```

## Usage

1. Start the development server:

```bash
npm start
```

2. Open the application in your browser:

```bash
http://localhost:3000/calendar
```

## Dependencies

- React.js: A JavaScript library for building user interfaces.
- React Router: A routing library for React applications.
- dayjs: A JavaScript library for manipulating and formatting dates.
- React-FontAwesome: React library for use adding icons.
- Material UI: For elements and consistent, easy styling.
- Material UI Date Pickers: Material UI library for adding date and time pickers.

## Project Structure

```
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── CalendaGrid
│   │   ├── CalendarDay
│   │   ├── Reminders
│   │   └── ...
│   ├── assets
│   │   ├── WeatherIcons
│   │   └── ...
│   ├── pages
│   │   ├── App.js
│   │   ├── Calendar.js
│   │   └── ...
│   ├── services
│   │   └── Api
│   ├── utils
│   │   ├── dateUtils.js
│   │   └── ...
│   ├── routes
│   │   └── index.js
│   ├── Main.js
│   └── ...
├── package.json
└── ...
```

- The `public` directory contains the HTML template for the application.
- The `src` directory contains the application source code.
- The `components` directory contains React components used in the application.
- The `assets` directory contains assets e.g weather icons used in the application.
- The `utils` directory contains utility functions for working with dates and hooks.
- The `pages` directory contains the application's routable pages.
- The `services` directory contains source code api calls
- The `routes` directory contains routing information for the application.
- The `Main.js` file is the main entry point of the application.

## About the application

This application is only front-end and has no backend implementation. As such, there are no databases or apis used to store reminders or any calendar data. For persistence, I use the browsers localstorage.

This application fetches city information from Accuweather. Weather information is fetched from VisualCrossing. Api keys for these have been provided in the application (These api keys will be available for a limited period for the purposes of app testing after which I will deactivate them, so it is recommeded to create and use your own api keys).

### Using the application

This section contains details on how to use the calendar app location in the `/calendar` route.

#### Adding a reminder

Click on the empty part inside the calendar day. That should open up a card where you can set the reminder name/label and city. The date is set to the clicked calendar date and the time to 08:00(_Time is set to 24 hour. We haven't provided functionaility to change it to 12 hour as of yet. Stay tuned for this in the future :)_)

Once you have filled the fields with the desired values, click on the `Add Reminder` button to add the reminder. Once done, the reminder will be added as a stack to the calendar day and the card will be closed.

**NB:** _You can leave the reminder name and city empty. The name will be displayed as `Unnamed` on the calendar_

Once you add the city, the weather and temperature for the added city at the set date and time will be displayed.


https://github.com/domiebett/calendar-react-challenge/assets/14890939/e0f478b5-8419-4eb1-b6d6-c1b2c4781888


#### Editing an existing reminder

Click on a reminder in the a calendar day. A card will appear which allows you to set desired values. Once done, click on the `Update Reminder` button.

This should update the values for the reminder. Changing the reminder date will move the reminder to the appropriate date card on the calendar.

Editing the city, date or time updates the displayed weather and temperature.


https://github.com/domiebett/calendar-react-challenge/assets/14890939/6cb0ad2b-f6eb-4fdf-a4a9-93314fa9785d


#### Deleting an existing reminder

You have the option to delete the reminder. Open a reminder by clicking on the reminder in the calendar day section. Click on the trash icon in the top right to delete the reminder.


https://github.com/domiebett/calendar-react-challenge/assets/14890939/f5d027da-c3c9-42ae-a8c6-283478d1c0e5


## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin my-feature`.
5. Submit a pull request.

## Contact

If you have any questions or suggestions, feel free to reach out to the project maintainer at [dbett49@gmail.com](mailto:dbett49@gmail.com).
