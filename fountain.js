/*
 * Kristen Gustafson
 * October 2nd 2023
 * Section AC Elias Belzberg and Kasten Dylan Welsh
 *
 * This is a JS File that adds functionality to the fountainstation.html
 * file. This page helps the user make a drink and then drink it by
 * adding lemonade or tea one section at a time every time the user
 * presses the required button.
 */

'use strict';
(function() {

  window.addEventListener("load", init);

  /**
   * This function sets up event listeners that can detect whether or not a user
   * is interacting with the page
   */
  function init() {
    const LEMONADE_BTN = document.getElementById("lemonade-btn");
    const TEA_BTN = document.getElementById("tea-btn");
    const DRINK = document.getElementById("drink-btn");
    LEMONADE_BTN.addEventListener("click", function() {
      startDrink("lemonade");
    });
    TEA_BTN.addEventListener("click", function() {
      startDrink("tea");
    });
    DRINK.addEventListener("click", drink);
  }

  /**
   * This class starts the flow of the drink and starts a timer for the time
   * until the glass is filled
   * @param {String} newClass - the class that the liquid will be styled as
   */
  function startDrink(newClass) {
    const TIME = 1000;
    let emptySquares = document.querySelectorAll(".empty");
    if (emptySquares.length !== 0) {
      document.getElementById("flow").style.visibility = "visible";
      if (newClass === "lemonade") {
        document.getElementById("flow").style.backgroundColor = "#cafc03";
      } else {
        document.getElementById("flow").style.backgroundColor = "brown";
      }
      setTimeout(function() {
        populateDrink(newClass, emptySquares);
      }, TIME);
    } else if (document.querySelectorAll("#text h2").length < 1) {
      let alert = document.createElement("h2");
      alert.textContent = "Your cup is full, try drinking it before adding more!";
      document.getElementById("text").appendChild(alert);
    }
  }

  /**
   * This function adds new styles and allows the user to fill their glass
   * @param {String} newClass - the class that the liquid segment will now be
   * @param {NodeList} emptySquares - the amount of empty cup squares left
   */
  function populateDrink(newClass, emptySquares) {
    let square = emptySquares[emptySquares.length - 1];
    square.classList.remove("empty");
    square.classList.add(newClass);
    document.getElementById("flow").style.visibility = "hidden";
  }

  /** This function makes the glass appear empty as the user "drinks" the drink */
  function drink() {
    let teas = document.querySelectorAll(".tea");
    for (let i = 0; i < teas.length; i++) {
      let curTea = teas[i];
      curTea.classList.remove("tea");
      curTea.classList.add("empty");
    }
    let lemonades = document.querySelectorAll(".lemonade");
    for (let i = 0; i < lemonades.length; i++) {
      let curLemonade = lemonades[i];
      curLemonade.classList.remove("lemonade");
      curLemonade.classList.add("empty");
    }
    document.querySelector("h2:last-child").remove();
  }

})();