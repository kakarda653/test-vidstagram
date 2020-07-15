Getting Started:
For this exercise, you will need to build a simple web-app using Firebase and react (w/
react-boostrap). This will be a simple application that comprises several key functionalities of a
consumer application relying on the underlying technology of firebase.
Product Description:
You’re building an app called Vidstagram, which is a simplistic video only version of Instagram.
Core functionality should be:
1. Logging in view content (Firebase Auth)
a. User enters their full name and the phone number to log in
b. Just make sure its at least two words (don’t worry about validation)
2. Single screen with “feed” to display all posts (Firebase Functions + Firebase Firestore on
backend)
a. Sorted by creation date, descending
b. Each “post cell” should display the video, date, user name who created it, and
title of the post
c. Tap on the video to play/pause
3. Ability to create a new post with a title and upload a video (both required) (Firebase
Storage + Firebase Functions + Firebase Firestore on backend)
a. Photos should be force cropped to a square
4. After uploading a post, you should increment a “total_posts” property of the use
Examples Usage:
1. User John Doe is the first user and creates an account on Vidstagram
2. The “Feed” is currently empty since no one has uploaded any
3. John then uploads a post with a video of his cat
4. After upload, the feed will consist of this singular post
5. User Jane Doe is the second user and creates an account on Vidstagram
6. Upon connecting, Jane will see the singular video posted by John
7. John then uploads a post with a video of her dog
8. After upload, the feed will consist of these two videos, where Jane’s “Dog post” will be
above Jane’s video
Guidelines:
- You will need to use the following Firebase technologies for getting this project up &
running:
○ Firebase Auth
○ Firebase Functions
○ Firebase Firestore
○ Firebase Storage
○ Firebase Hosting
Design:
- Focus on usability, smoothness, functionality
- Should not be more than a few screens
- Should be responsive (web/tablet/mobile)
General Notes:
- You can create a free Firebase account (Spark plan)
- You’ll be able to test everything out on a hosted firebase generated URL for your project
When completed, please send URL of website back for review w/ your personal notes on the
project. Approximation 3-5 hours.
