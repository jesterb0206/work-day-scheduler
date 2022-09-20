# Work Day Scheduler

## Description

As a University of Washington Coding Boot Camp student, I have a busy schedule, and it can difficult to effectively manage my time sometimes. I'll use my iPhone's Notes or Calendar apps to keep track of my daily tasks that need completing, but the user interface is dull and boring, and deleting tasks takes multiple clicks/taps. I decided to build this project, then, to improve upon the existing gaps in notes/calendar apps that I see sometimes. As you go about your day, you'll get visual cues as to when it's time to start/end a task because each time block is color-coded to indicate whether it's that current hour, or if that hour is coming up or has already past. Once you complete that hour's tasks, you can erase them by selecting the trash can icon, or if the day has passed you can press the Clear Work Day! button and start with a fresh template to map out your next work day's to-do-list. The user interface features bold colors and fonts that harken back to the 1920s: much more exciting than most calendar apps! Through building this web application I was able to learn about Third-Party APIs such as Bootstrap, jQuery and Moment.js.

## Installation

N/A

## Usage

A few things to note:

![Work Day Scheduler Screenshot](Assets/Images/work-day-scheduler.png)

- When you open the Work Day Scheduler, the current day is displayed at the top of the calendar, along with the current time in hours, minutes and seconds.
- As you scroll down you'll be presented with time blocks for standard business hours. When you view the time blocks you'll see that each time block is color-coded to indicate whether it is in the past, present, or future. The past is represented by the color yellow, the present is represented by the color orange, and the future is represented by the color green. 
- When you click into a time block you can enter an event. If you wish to save it hover over the floppy disk icon and press it. You'll see that when you refresh the page the event/events persist because they're saved in local storage. Once an event is saved you can delete it by hovering over the trash can icon and pressing it. If you have events saved in multiple time blocks that you wish to delete press the Clear Work Day! button and your Work Day Scheduler will be completely initialized.

https://jesterb0206.github.io/work-day-scheduler/

## Credits

My Work Day Scheduler wouldn't be complete without the following sources:

https://www.bootstrapcdn.com - BootstrapCDN [I used Bootstrap 4.3.1 for my web application]

https://colorleap.app/time/1920 - Color Leap [The color pallette I used for my web application was called Success]

https://digitalsynopsis.com/design/color-leap-historical-palettes/ - Digital Synopsis [This article was what led me to discover the Color Leap website]

https://fontawesome.com - Font Awesome [My save and delete button icons came from this website]

https://fonts.google.com - Google Fonts [I imported my font families from Google Fonts]

https://getcssscan.com/css-buttons-examples - CSS Scan [My Clear Work Day! button is a modified version of Button 53 by Alpine Day]

https://momentjs.com - Moment [I used Moment.js 2.24.0 for my web application]

https://releases.jquery.com - jQuery [I used jQuery Core 3.4.1 for my web application]

https://stackoverflow.com/questions/44712653/auto-refresh-at-the-top-of-every-hour - Stack Overflow [I used a code snippet from this answered question in my JavaScript file]

https://www.1001fonts.com/1920s+google-web-fonts.html?page=1 - 1001 Fonts [I used Carter One, Limelight and Yanone Kaffeesatz for my web application]

## License

Please refer to the LICENSE in the repo.
