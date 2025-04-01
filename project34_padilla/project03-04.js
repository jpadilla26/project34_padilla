/*    JavaScript 7th Edition
      Chapter 3
      Project 03-04

      Application to write a list of customer reviews
      Author: Jorge Padilla   
      Date:   04/01/2025

      Filename: project03-04.js
*/

let reviewers = ["WillHa85", "GoldFry26", "Mittens41", "Tompkins8"];
let reviewType = ["P", "N", "", ""]
let stars = [5, 2, 1, 4];
let reviewDates = ["11/18/2024", "11/17/2024", "11/15/2024", "11/10/2024"];
let reviews = [
   "I've owned all of the Dance Off games from the beginning. I have lost 6 pounds since I started playing.",
   "A so-so release of this well-established game. Where this release fails is in the choreography. Many of the moves follow predictable patterns. I hope the next release improves the choreography .",
   "The installation was buggy and kept crashing my gaming console. I spent several hours on tech support with no solution to my problem. I finally returned it and got my money back. I wish I could give it a zero star rating.",
   "The latest version of Dance Off improves upon the 8th Edition only slightly; still is one of the best dance-style games on the market.",
];
let reviewTitles = ["My Favorite Workout Game", "Poor Choreography", "Buggy with Poor Tech Support", "Nice Improvement"];

//create starImages function with rating parameter
function starImages(rating)
{
      //declare variable with empty string
      let imageText = " ";

      //create for loop to  in increase counter up to less than or equal to rating variable length
      for(let i = 1; i <= rating.length; i++)
      {
            //add image to the loop to variable imageText
            imageText += "img src = 'star.png' alt = "/
      }

      //add statement to return value of imageText from the loop
      return imageText;

      // create for loop with counter variable ranging from 0
      //up to less than length of the reviewers array
      for(i = 0; i < reviewers.length, i++)
      {
          //initialize reviewCode variable with empty string
          let reviewCode = " ";

          //start else if statement stating 3 different possibilities
          if( reviewType === "P")
            {
                  reviewType += "<table class = 'prime'>";
            } 
            else if(reviewType === "N")
            {
                  reviewType += "table class = 'new'>";
            }
            else
            {
                  reviewType += "<table>";
            }
            reviewTitles += "<caption>reviewTitles[i]</caption>";
            reviewers += "<tr><th>By</th><td>reviewers[i]</td></tr>";
            reviewDates += "<tr><th>Review Date</th><td>reviewDates[i]</td></tr>";
            reviews += "<tr><td colspan='2'>reviews[i]</td></tr>";

            //insertAdjacentHTML method to insert value of review code variable
            document.getElementsByTagName("article").insertAdjacentHTML(reviewCode);


      }

}