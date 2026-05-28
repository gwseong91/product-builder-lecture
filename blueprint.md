
# Lotto Number Generator

## Overview

This project is a web-based lottery number generator. It provides a user-friendly interface for generating and displaying a set of 6 unique random numbers, typically for a 6/45 lottery game. The application is designed with a modern aesthetic, using web components for a modular structure and featuring interactive elements.

## Design and Features

### Visual Design
*   **Theme:** Modern, clean, and engaging.
*   **Color Palette:** A vibrant and energetic palette with a mix of bright colors for the lottery balls and a clean, neutral background.
*   **Typography:** Clear and readable fonts, with emphasis on the generated numbers.
*   **Layout:** Centered, responsive layout that works well on both desktop and mobile devices.
*   **Effects:**
    *   **Noise Texture:** A subtle noise texture on the background for a premium feel.
    *   **Shadows:** Multi-layered drop shadows on elements to create a sense of depth.
    *   **Glow Effect:** An interactive glow effect on the "Generate" button.

### Features
*   **Number Generation:** Generates 6 unique random numbers between 1 and 45.
*   **Display:** The generated numbers are displayed as individual "lotto balls" with distinct styling.
*   **Interactivity:** A "Generate Numbers" button to trigger the number generation.
*   **Web Components:** A `<lotto-ball>` custom element encapsulates the styling and behavior of each number ball, promoting reusability and separation of concerns.

## Current Plan

1.  **`index.html`:** Set up the main structure of the application, including the title, a container for the lotto numbers, and the "Generate" button.
2.  **`style.css`:** Apply modern CSS for styling, including the background, container, button effects, and responsive design.
3.  **`main.js`:**
    *   Define the `<lotto-ball>` custom web component.
    *   Implement the lottery number generation logic.
    *   Add an event listener to the button to trigger the generation and display of the numbers.
