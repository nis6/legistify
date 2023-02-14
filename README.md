# Legistify Appointment Management Web App

#### Requirements

1. Book an Appointment With a lawyer.
2. If the number of bookings goes beyond lawyer availability show “Appointments not available”
3. Given a lawyer, see complete appointment history

## Main Functionalities

- Lawfirms can register themselves and present their lawyers and services. [Future Scope]
- Individuals can find lawyers best fitting their needs by comparing all the law firms present on this platform, thus having easy access to compare all in one place.

## Routes

For now there is just a single route '/home', I have added React-router to add routes for all the other items in navbar, and registration page.

## Components

### Registered Lawfirms

This is a scalable component shows all of the registered lawfirms, available in the central redux store, from here user can navigate to any lawfirm and explore its registered lawyers.

### Lawyer Profile

Each lawyer of each lawfirm has their profile with details like name, speciality, cost of appointment and an about section, along with two buttons to directly book appointments and to check out the already booked slots.

### Appointment Form

- requires all fields, shows red warning on empty submission of any field
- prompts to submit dialogue box, on valid fields
- prompts to appointment exists dialogue box, on duplicate email id, and doesn't submit the details

### History

This is a scalable component, with access to central redux store, it shows all of the booked slots for a particular lawyer on toggling the Appointment History button. For demo, I have added a few appointments with "Soli Sobrajee" of "Trilegal India", in the data file.

---

## Buttons

### Register Your Firms

Altho it is a future scoped feature, but as this is supposed to be an appointment management app for various lawfirms, This button leads to the Firm Register Page. lawfirms can register their name, along with lawyers profiles with a form iteratively.

### Find Your Attorney

This button directs user to the Registered Firms component, so that users can explore the registered lawfirms and select their lawyers based on their own preferences and needs.

#### Book-Appointment Button

This button opens up an Appointment Form as a Modal on a particular lawyers profile, so that the users can book an appointment for a lawyer directly from their profile.

image comes here

When all slots are booked and there's none available, this button turns rust color and says "Appointments not available".

image comes here

#### Appointment History Button

This button opens and closes the list of all booked appointment slots for the selected lawyer.

image comes here

---

### Dependencies used for this project

- React-router-DOM
- react-redux
- react-router
- json-loader
- redux-thunk
- axios
- chakra-ui
- styled-components
- reduxjs/toolkit
