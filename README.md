# Whaty'allthink
> Social media app that allows users to create polls, vote, and comment on them.

This app uses React-native and Redux, with help from the following [tutorial](https://blog.cloudboost.io/getting-started-with-react-native-and-redux-6cd4addeb29).

![](header.png)

## Get Started

Make sure you have npm (Node Package Manager) installed. Once you have npm, you can just run:
```sh
npm install
```
in the parent directory. This should install all needed packages, including Expo, which makes it easy to test on a device with the Expo app. To test on the device, run
```sh
expo start
```
in the parent directory, scan the QR code with your device, and the app should run.

## What's done?
Four screens have been mostly completed as of 7/3/19. The screens that have been completed are the Home Screen, the Explore Screen, the Notifications Screen, and the Profile Screen. Here's what's done on each screen:

Home Screen:
* Users are able to type a description in the text field
* Character limit is displayed and enforced on the text field
* Users are able to add voting options via the emoji picker
* Posting the poll will make it visible in the explore screen for others to vote on, and clear the Home screen

Explore Screen:
* Users are able to vote on polls and remove their votes
* Users can vote on however many options they would like
* Users votes are stored in the Redux state associated with the poll
* Polls can be retrieved from either the Redux state or via an API call (using Redux with Axios)

Notifications Screen:
* Users can see a list of notifications they have received

Profile Screen:
* User profile image, username, tag, and bio are displayed
* User activities in the Home Screen (making a poll) or in the Explore Screen (voting on polls) is displayed on this screen


## What's left?
The main things left to do are as follows:
* When tapping an explore poll, another screen should come up with a graph of user votes and comments
* Tapping on an image in a poll should enlarge it in a lightbox
* All redux calls should be changed to API calls by formatting them so that the Axios middleware will make the request

There are also other smaller quality of life changes that have been left as todos in the comments.
