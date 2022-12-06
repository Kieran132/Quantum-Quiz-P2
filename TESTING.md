# Testing

## Validation

### W3C Validator

#### index.html
Passed

### (Jigsaw) Validator
Passed

### Jshint Testing

#### script.js

<img src="assets/README images/jshint.png">

The reason why questions is a undefined variable is because the questions for the quiz are in a seperate file (questions.js) than the one used to write the Javascript. One solution to this is Javascript Modules and pulling through the questions.js file into the script.js file.

One item highlighted in this testing was 'optionSelected' being an unused variable. I had a look at re-writing the code of adding in an eventListener, however I have been unsuccessful due to my lack of Javascript knowledge. 

#### questions.js

Everything passed

### Lighthouse Testing

<img src="assets/README images/lighthouse.png">

## Bugs

- The color of the writing throughout the quiz clashed with the darkness of the background.
Resolution - Added a semi-transparent background that the color complimented the theme of the quiz

- The border of max-width 375px was too small and the buttons of the quiz were not within the border.
Resolution - Increased with height and width of the border so the quiz fits within.

- When initially testing the quiz "Null" came up on the results page. I am unable to recreate this result to figure out why this is happening

- I added a 404.html to redirect the user to a custom 404 page upon typing in a incorrect url link. Futhermore, I researched and it seems adding a .ataccess would work. However this did not resolve the problem. I then created a repository without using Code Institute template and added a 404.html to that and that worked. My conclusion is that there is something within the template that rejects any new custom 404 pages and uses a pre-made one.

## Testing

I sent the website to 5 people to test and see how they found playing the quiz. 4 people said that it worked great and functioned well. However, 1 user highlighted a design issue, with the fact that navigation button and writing was pushed out of the border when playing on a phone.

## Home Page Testing

- Responsiveness - once the how page was layed out how I intended, I progresively went through all the responsive sizes in Dev.tools and adjusted the styling accordingly to represent the screen size used

- Username Input to local storage - To test this I typed in a name and hit enter. Then on Dev.tools, go to application, under storage area there is a local storage drop down. I clicked this and could see the name in there

- Start Button - The start button is linked to the instructions part of the quiz. The intention for this is when the start button is clicked then everything within in home_page div disappears and only part visible is the instructions page. Upon clicking on the start button, this is what happened.

- Opacity change - For transitioning between the different parts of the quiz, function is called to "hide" or change the opacity of a div. This can be seen working from home page disappearing when clicking on the start button to the instruction page. The same can also be seen working from the instruction page to the quiz page.

## Instruction Page Testing 

- The instructin page is quite simple so just making sure everything was clear to read and the design all lined up with borders and spacing between points

## Quiz Page Testing

- Layout - Transitioning through the quiz, some of the questions are bigger than others so would push content down below it. Going through all the responsive features on Dev.tools, I could see and ammend any issues regarding this.

- Selection of an answer - One main aspect of the quiz i wanted to incorporate was when an answer is selected the user cannot select another. This can be seen working when trying to quickly select another answer

- Showing the user the correct answer - Once a user selects an answer, their choice will either show up green (being correct) or red. If it is red then the quiz will highlight the correct answer in green as well to show they user what is correct. This is seen working as when selecting the wrong answer, t shows up red but also the correct answer shows up in green.

- Number of questions - On the left side of the footer it shows what number question the user is on and increments accordingly. This can be seen working and is corresponds with the question number.

- Next button - When selecting the next button the quiz moves to the next questions. One area of improvement I would like to add is the requirement of the user having to select an answer before progressing.

## Results Page Testing

- Quotation - Depending on how many questions the user gets correct will depend on what funny message is presented. This can be seen working by different messages appearing in accordance with the score

- Name obtained from local storage - On the home page the user saves their name to the local storage. This is then used as a personal aspect for the game and appears on the results page. This is shown by the name appearing here

- End Game button - This button reloads the whole page to send the user back to the beginning. This is seen working by the page reloading upon the click of the button.