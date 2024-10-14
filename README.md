# Côte d'Or Story

## Overview

This project is a website designed to deliver a captivating, animation-driven experience that revolves around Côte d'Or, the renowned Belgian chocolate brand. Through dynamic visuals and engaging interactions, the site takes users on a journey through the rich history and legacy of Côte d'Or, highlighting its iconic status in the world of chocolate.

## Features

- **Parallax Layer Effect:** Adds depth and movement to the background.
- **Rotate Animation:** Smooth rotational animations for engaging visuals.
- **Text Fade-In Animation:** Gradually reveals text as users scroll for an immersive experience.
- **Mouse Parallax Effect:** Responsive interactions where elements move based on the user’s mouse position.
- **Draggable Image Feature:** Users can interact with the old Côte d'Or packaging image, dragging it around the screen for added engagement.
- **Expandable Products Section:** When a button is clicked, the product section expands to reveal more information, enhancing user interaction and exploration.

## New Component: Final

The `Final` component adds a delightful interactive experience, where clicking on chocolate images triggers a playful animation using GSAP. The animations move the chocolate images in different directions, create rotations, and reveal a text overlay that highlights the range of chocolate products offered by Côte d'Or.

## Used Animation Libraries

- [React Spring](https://www.react-spring.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://gsap.com/)

## Tutorials

- [YouTube Tutorial on Animation](https://www.youtube.com/watch?v=ATEPid_7s30&t=27s)
- [GSAP Forum](https://gsap.com/community/forums/topic/23965-animate-based-on-mouse-position/)

## Project Structure

The project is organized into several components, each responsible for different sections of the website. 

### Components/: Contains UI components for the application.

- **Home:** The landing page with a button to navigate to the History page and features the ChocolateBlob.
- **ChocolateBlob:** An animated blob that follows the user's mouse movements.
- **History:** The main page displaying the history of Côte d'Or with a parallax effect.
- **Intro:** Introduction section with animated text and images for Côte d'Or.
- **CircleRotate:** Displays rotating graphics and animated text about the brand.
- **TextReveal:** Features a typewriter effect to reveal text alongside an elephant image.
- **Products:** Showcases the first packaging of Côte d'Or with draggable functionality.
- **Final:** An interactive component where clicking on chocolate images triggers animations to enhance user engagement.
