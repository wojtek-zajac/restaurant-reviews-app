# Restaurant Reviews App
---
#### _[Udacity](https://udacity.com/) Project_

## Project Overview

The goal of the **Restaurant Reviews** project, was to incrementally convert a static webpage to a mobile-ready web application. I had to take a static design that lacked accessibility and converted the design to be responsive on different sized displays and accessible for screen reader use. I also added a service worker to begin the process of creating a seamless offline experience for the app's users.

### Table of Contents

* [Specification](#specification)
* [Requirements](#requirements)
* [Installation and Run](#installation-and-run)
* [Note about ES6](#note-about-es6)


### Specification

I have been provided [the code for a restaurant reviews website](https://github.com/udacity/mws-restaurant-stage-1/tree/google-maps). The code had a lot of issues. It was barely usable on a desktop browser, much less a mobile device. It also didn't include any standard accessibility features, and it didn't work offline at all. My job was to update the code to resolve these issues while still maintaining the included functionality. See the **Requirements** below for more details.

### Requirements

* **Make the provided site fully responsive.** All of the page elements should be usable and visible in any viewport, including desktop, tablet, and mobile displays. Images shouldn't overlap, and page elements should wrap when the viewport is too small to display them side by side.

* **Make the site accessible.** Ensure that alt attributes are present and descriptive for images. Add screen-reader-only attributes when appropriate to add useful supplementary text. Use semantic markup where possible, and aria attributes when semantic markup is not feasible.

* **Cache the static site for offline use.** Using Cache API and a ServiceWorker, cache the data for the website so that any page (including images) that has been visited is accessible offline.

### Installation and Run

1. [Download](https://github.com/wojtek-zajac/restaurant-reviews-app.git) / Clone the repository

    `git clone https://github.com/wojtek-zajac/restaurant-reviews-app.git`

2. Open Terminal / Bash and got to the folder

    `cd reastaurant-reviews-app`

3. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer. 

    In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to [Python's website](https://www.python.org/) to download and install the software.

4. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.

5. You will need your own [Google Maps API key](https://developers.google.com/maps/documentation/javascript/get-api-key). Replace the text `YOUR_GOOGLE_MAPS_API_KEY` in `index.html` and `restaurant.html` with your own key.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code.



