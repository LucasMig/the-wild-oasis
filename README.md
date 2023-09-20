# Description
This is a very simple application, where an fake hospitality company should be able to manage its cabins, bookings and visualize its data.
- React
- Styled-Components
- React-Router
- React-Query
- SupaBase

## How to run
This project is not hosted anywhere, but you can run it locally. You will need to have Node.js installed.

1. Clone the repository
2. Run the following commands in the project's root directory:

        > npm install && npm run dev
3. Open http://localhost:5173 in your browser

## Requirements
- [x] Application users are hotel employees, who should be logged into the app to perform tasks.
- [x] New users can only be created from inside the application.
- [x] Users should be able to upload an avatar, and change their name and password.
- [x] The user should be able to see a list of available cabins, create new ones, update and delete existing ones.
- [x] The user should be able to see a list of bookings, check in and check out guests.
- [x] Bookings may not have been paid on guest arrival. Therefore, users need to accept payments (outside the app) and then confirm that payment has been received (inside the app).
- [x] On check in, guests should be able to add breakfast to their booking.
- [x] The initial app screen should be a dashboard, to display important information (detailed below).
- [x] Users should be able to define a few application settings, such as breakfast price, min and max nights per booking, max guests per cabin, etc.
- [x] App should have a dark mode.

### Dashboard requirements
- [x] A list of guests checking in and out on the current day.
- [x] Statistics on recent bookings, sales, check ins, and occupancy rate.
- [x] A chart showing all daily hotel sales, showing both _total_ and _extra_ sales.
- [x] A chart showing statistics on stay durations.

## Takeaways
Still building this one! Will come back soon :)