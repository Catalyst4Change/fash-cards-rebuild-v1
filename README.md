# Fash Cards
This project originated as an individual [Showcase Project](https://frontend.turing.edu/projects/module-3/showcase.html) in the course of my [Turing School](https://turing.edu) curriculum. Since then I have entirely rebuilt it and deployed it as a standalone web-app.

## The assignment:
- Consume an API and display its data
- Allow users to control or manipulate the data in some way
- Display multiple views handled by React Router
- Deploy onto a hosting service

## My Project:
I knew from the start that I wanted to build an antifascist flash-card app using the ADL's [Hate Symbol Database](https://www.adl.org/resources/hate-symbols/search). However, the ADL unfortunately does not provide this data as an API. In order to use this information, I would need to build...
- A web-scraper to obtain the information
- An Express server to have that information available as an API
- The flash-card app itself, which would include the ability to save cards

### Puppeteer
Step one was to learn how to scrape the information I wanted from someone else's website. I utilized [Puppeteer](https://pptr.dev) as a headless browser to access [ADL.org](https://www.adl.org). I scanned the page looking for specific HTML class names, captured the relevant data, and added it to an array. Repeat 214 times for each data type (symbol name, image, description), collate the resulting arrays into a single JSON file, and save it to the root folder.

### Express
With the data in hand, I built a very simple REST server to return the entire array. This became my read-only backend.

### React
Now the fun part! I was able to consume my own API and map through it creating a 'card' for each data object. To make it engaging, I added a carousel that moved through the cards and a flip animation to separate the image and the description. This gives a sense of motion and completion as you guess the answer to each card. As a feature, users can flag a card to reference later. This latest version saves those cards to your browser so you do not lose them when you refresh the page.

## Roses & Thorns
- As with all of my projects I had many challenges, followed by celebrations for overcoming them.  
Firstly, I was making much more work for myself by not picking an existing API. While teaching myself Puppeteer was not too complicated, (as it works similarly to Cypress, which we had already learned) it still took me a full day to get working. I was immediatly behind schedule. Similarly, the Express server took some time to grok and configure, using tools like [Postman](https://www.postman.com) to make sure I was doing it right.  
- Once I got around to the meat of the React app, I was pretty stressed. The card components were easy enough to generate, but animating them turned out to be MUCH more complicated than I expected. Each card needs to hold it's own `flipped` state and updating that caused the randomly generated buttons to refresh! At some point the cards would flip but once the animation ended, the information on the card would disappear. There was no shortage of headaches, but luckily I was able to submit a functional (if pallid) application that did everything I set out to do.  
- The heavy nature of the content caused me some psychological stress, as to be expected. You can't stare at nazi shit for hours without feeling some version of hate bubbling up in yourself. Ultimately, I think this app is useful as a tool to recognize hateful symbology on disply in America. What you do when you see it is up to you.  
