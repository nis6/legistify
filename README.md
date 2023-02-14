# Legistify Appointment Management Web App

![image](https://user-images.githubusercontent.com/47380034/218688195-0c3b4d8f-b676-4eba-af7f-02572b345ead.png)

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
![image](https://user-images.githubusercontent.com/47380034/218688350-b2253409-f2ea-4219-8666-f058e2138a26.png)

### Lawyer Profile

Each lawyer of each lawfirm has their profile with details like name, speciality, cost of appointment and an about section, along with two buttons to directly book appointments and to check out the already booked slots.
![image](https://user-images.githubusercontent.com/47380034/218688510-0ed1c701-8a8d-4a7d-a8f7-22c5ca25bc5a.png)

### Appointment Form

![image](https://user-images.githubusercontent.com/47380034/218688662-23dad59c-ac7b-4595-a706-5bc2bd50e6da.png)

#### Requires all fields, shows red warning on empty submission of any field

![image](https://user-images.githubusercontent.com/47380034/218688801-aa7d58fd-3e4a-4916-945a-1b9e0852eeac.png)

#### Prompts to submit dialogue box, on valid fields

![image](https://user-images.githubusercontent.com/47380034/218689049-cc9fbcd5-0adf-4c76-ba23-058fa0a55223.png)

#### Prompts to appointment exists dialogue box, on duplicate email id, and doesn't submit the details

![image](https://user-images.githubusercontent.com/47380034/218689161-5e0c1955-2b9e-41ee-a537-a920e730ef52.png)

### History

This is a scalable component, with access to central redux store, it shows all of the booked slots for a particular lawyer on toggling the Check History button. For demo, I have added a few appointments with "Soli Sobrajee" of "Trilegal India", in the data file.
![image](https://user-images.githubusercontent.com/47380034/218689612-af8e8dba-2273-4190-92d1-f9696c6f8a9d.png)

---

## Buttons

### Register Your Firms

Altho it is a future scoped feature, but as this is supposed to be an appointment management app for various lawfirms, This button leads to the Firm Register Page. lawfirms can register their name, along with lawyers profiles with a form iteratively.
![image](https://user-images.githubusercontent.com/47380034/218689769-3debbc1e-f8c0-40f1-b29e-bf9ad77bfeee.png)

### Find Your Attorney

This button directs user to the Registered Firms component, so that users can explore the registered lawfirms and select their lawyers based on their own preferences and needs.
![image](https://user-images.githubusercontent.com/47380034/218689959-ce2b917c-3efe-4d94-96ad-cbf00447e8cb.png)

#### Book-Appointment Button

This button opens up an Appointment Form as a Modal on a particular lawyers profile, so that the users can book an appointment for a lawyer directly from their profile.
![image](https://user-images.githubusercontent.com/47380034/218690021-169ea5a0-cbfb-4b1a-a849-7be4c8e16fbf.png)

When all slots are booked and there's none available, this button turns rust color and says unavailable.
![image](https://user-images.githubusercontent.com/47380034/218690119-ad9f77e2-adbb-4c44-b168-5c94580c1bb6.png)

#### Appointment History Button

This button opens and closes the list of all booked appointment slots for the selected lawyer.
![image](https://user-images.githubusercontent.com/47380034/218690208-e551cdba-2523-4b72-890e-7ab3d706962f.png)

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
