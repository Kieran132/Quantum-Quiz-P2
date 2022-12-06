# Testing

## Validation

### W3C Validator

#### index.html
Passed

### (Jigsaw) Validator
Passed

### Jshint Testing

<img src="assets/README images/jshint.png">

The reason why questions is a undefined variable is because the questions for the quiz are in a seperate file (questions.js) than the one used to write the Javascript.

One item highlighted in this testing was 'optionSelected' being an unused variable. I had a look at re-writing the code of adding in an eventListener, however I have been unsuccessful due to my lack of Javascript knowledge.

### Lighthouse Testing

<img src="assets/README images/lighthouse.png">

### Bugs

- The color of the writing throughout the quiz clashed with the darkness of the background.
Resolution - Added a semi-transparent background that the color complimented the theme of the quiz

- The border of max-width 375px was too small and the buttons of the quiz were not within the border.
Resolution - Increased with height and width of the border so the quiz fits within.

- When initially testing the quiz "Null" came up on the results page. I am unable to recreate this result to figure out why this is happening

### Testing

I sent the website to 5 people to test and see how they found playing the quiz. 4 people said that it worked great and functioned well. However, 1 user highlighted a design issue, with the fact that navigation button and writing was pushed out of the border when playing on a phone.

