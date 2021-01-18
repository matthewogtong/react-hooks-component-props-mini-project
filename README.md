# Components, Props and JSX Mini Project

## Overview

Now that you've learned about how to work with components in React, it's time to
build something and put those skills to use! Your goal for this lab is to make a
_static site_ in React to practice building components; writing JSX; and passing
down data as props.

We'll be creating a personal blog site, similar to
[Dan Abramov's Overreacted](overreacted.io):

![demo](https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-component-props-mini-project/master/images/demo.png)

There is some starter code available in `src/components/App.js`. You have data
available for the blog being imported, so you can pass it down from `App` to the
components that need it.

## Deliverables

Have a look at the components below and draw out a component hierarchy so you
can determine how to pass data down as props.

### Header

Make a `Header` component as a child of `App`. It should return:

- a `<header>` element with the following elements inside:
  - a `<h1>` with the _name_ of the blog, passed as a prop

### About

Make a `About` component as a child of `App`. It should return:

- a `<aside>` element with the following elements inside:
  - a `<img>` element, with the `src` set to an _image_ passed as a prop
  - the `<img>` element should use this placeholder image as a _default value_
    for the prop if no prop is passed in: "https://via.placeholder.com/215"
  - the image should also be accessible! Give it an `alt` attribute of "blog logo"
  - a `<p>` element, with the _about_ text for the blog passed in as a prop

### ArticleList

Make a `ArticleList` component as a child of `App`. It should return:

- a `<main>` element with the following components inside:
  - an array of `Article` components (one component for each _post_ passed down
    as a prop to `ArticleList`)
  - make sure to assign a unique `key` prop to each `Article`

  <!-- THIS IS WHERE I LAST LEFT OF -->
### Article

Make a `Article` component as a child of `ArticleList`. It should return:

- a `<article>` element, with the following elements inside:
  - a `<h3>` element displaying the _title_ of the article, passed as a prop
  - a `<small>` element displaying the _date_ of the article, passed as a prop
    - a _default value_ of "January 1, 1970" should be used if no date is passed as a prop
  - a `<p>` element displaying the _preview_ of the article, passed as a prop

### Bonus Feature: 'Minutes to Read'

You'll notice in the original [Overreacted](overreacted.io) site, there's a
'minutes to read' indicator next to each article.

If the article takes less than 30 minutes to read:

- For every 5 minutes (rounded up to the nearest 5), display a coffee cup emoji.
  For example, if the article takes 3 minutes to read, you should display "☕️ 3
  min read". If the article takes 7 minute, you should display "☕️☕️ 7 min
  read".

If the article takes 30 minutes or longer to read:

- For every 10 minutes (rounded up to the nearest 10), display a bento box
  emoji. For example, if the article takes 35 minutes to read, you should
  display "🍱🍱🍱🍱 min read". If the article takes 61 minutes to read, you
  should display "🍱🍱🍱🍱🍱🍱🍱 min read".

There aren't tests for this feature, so you'll have to rely on running the code
in the browser to see if your implementation works!
