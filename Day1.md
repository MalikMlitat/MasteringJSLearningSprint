
# Summary of Day1
# Introduction to JS

## What is JS?
JS stands for javascript, which is a programming language started in 1995 mainly to created web pages, mobile apps...etc.

## What/why is Dom ?
**DOM** stands for **D**ocument **O**bject **M**odel, which enables programmers to access programmatically webpage elements.

The DOM is a powerful tool that can be used to dynamically change the content and behavior of a web page.
JavaScript can use the DOM to:

* Select elements by tag name, ID, or class
* Add, remove, or modify elements
* Get and set the content of elements
* Attach event listeners to elements

## How to search for elements using JS ?
There are several ways to search for elements using JS:

| Get elements based on | Syntax in JS                                   |
|-----------------------|------------------------------------------------|
| id                    | `document.getElementById("elementID")`         |
| tag name              | `document.getElementsByTagName("tagname")`     |
| class name            | `document.getElementsByClassName("classname")` |
| CSS selectors         | `document.querySelector("test");`              |

## Code Samples

```js
querySelector('h1'): This syntax selects the first h1 element in the document.
querySelector('#myDiv'): This syntax selects the element with the ID myDiv.
querySelector('.myClass'): This syntax selects all elements with the class myClass.
querySelectorAll('h1'): This syntax selects all h1 elements in the document.
```