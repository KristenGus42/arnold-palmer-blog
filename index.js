/*
 * Kristen Gustafson
 * October 2nd 2023
 * Section AC Elias Belzberg and Kasten Dylan Welsh
 *
 * This is a JS File that adds functionality to the index.html
 * file. This page helps take in user input and then format it
 * and add it to the HTML page in order to allow users to make
 * blog posts.
 */

'use strict';
(function() {

  window.addEventListener("load", init);

  /**
   * Hides the main content of the page to give the user a pop up asking to sign a petition,
   * while also creating event listeners to see when the user interacts with the page
   */
  function init() {
    document.querySelector("main").style.display = "none";
    document.querySelector("header").style.display = "none";
    document.querySelector("footer").style.display = "none";
    document.getElementById("btn-post").addEventListener("click", dissectInput);
    document.querySelectorAll(".petition-btn")[0].addEventListener("click", showBlog);
    document.querySelectorAll(".petition-btn")[1].addEventListener("click", showBlog);
  }

  /**
   * Brings user to main webpage by making the main content visible and making the
   * peition page dissapear
   */
  function showBlog() {
    document.querySelector("main").style.display = "block";
    document.querySelector("header").style.display = "block";
    document.querySelector("footer").style.display = "block";
    document.getElementById("petition").style.display = "none";
  }

  /**
   * Modifies the DOM so the user's input is formatted as a blog post
   * @param {String} name - author of the blog post
   * @param {String} date - the date the post was written
   * @param {String} text - the body of the blog post
   * @param {Object} article - this is the HTML element that will be the parent
   * @param {String} title - this is the title of the blog post
   */
  function writePost(name, date, text, article, title) {
    let blogTitle = document.createElement("article");
    article.appendChild(blogTitle);
    blogTitle.classList.add("blog-title-date");
    const TITLE_ADD = document.createElement("h4");
    TITLE_ADD.textContent = title;
    blogTitle.appendChild(TITLE_ADD);
    const DATE_ADD = document.createElement("h4");
    DATE_ADD.textContent = date;
    blogTitle.appendChild(DATE_ADD);
    const NAME_ADD = document.createElement("h5");
    NAME_ADD.textContent = "Author: " + name;
    article.appendChild(NAME_ADD);
    const TEXT_ADD = document.createElement("p");
    TEXT_ADD.textContent = text;
    article.appendChild(TEXT_ADD);
  }

  /**
   * Disects user input into the different compartments of a post and calls a function
   * to change the DOM based on input
   */
  function dissectInput() {
    let newPost = document.createElement("section");
    newPost.classList.add("blog-post");
    document.getElementById("blog-posts-section").insertAdjacentElement("afterbegin", newPost);

    const TEXT = document.getElementById("textbox").value;
    const AUTHOR = document.getElementById("author").value;
    const TITLE = document.getElementById("title").value;
    const CUR_DATE = new Date();
    const DATE_STR = CUR_DATE.getMonth() + 1 +
      "/" + CUR_DATE.getDate() + "/" + CUR_DATE.getFullYear();
    writePost(AUTHOR, DATE_STR, TEXT, newPost, TITLE);
  }

})();