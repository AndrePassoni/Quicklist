<h1 align="center">
    <img src="./assets/logo.svg">
</h1>

<p align="center">
  <img alt="Quicklist Preview" src="./assets/preview.svg" width="100%">
</p>

<p align="center">
  An interactive shopping list application designed to organize your weekly grocery needs.
  <br />
  <br />
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-run">How to Run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=license&message=MIT&color=CA3884&labelColor=080B12" alt="License">
</p>

## 💻 Project

**Quicklist** is a responsive web application built to simplify shopping list management. Unlike static lists, Quicklist offers a dynamic experience where users can add items, mark them as completed, and remove them with visual feedback.

This project was developed as part of the **Rocketseat Fullstack** course, focusing on essential JavaScript concepts such as DOM manipulation and event handling.

## 🚀 Technologies

This project was developed with the following technologies:

- **HTML5** (Semantic structure)
- **CSS3** (Variables, Flexbox, Grid Layout)
- **JavaScript** (ES6+, DOM Manipulation, Event Delegation)

## ✨ Features

- **Add Items:** Dynamic input field to add new items to the list.
- **Mark as Done:** Click anywhere on the item row to toggle its status (visualized with strikethrough text and opacity change).
- **Remove Items:** Delete items easily using the trash icon.
- **Visual Feedback:** A temporary alert message appears when an item is removed (auto-dismisses after 3 seconds).
- **Responsive Design:** Optimized for both desktop and mobile screens.

## 🧠 Key Concepts Applied

- **Event Delegation:** Instead of attaching listeners to every single item, a single listener on the parent container manages clicks for better performance and dynamic element handling.
- **DOM Manipulation:** Creating, appending, and removing elements (inputs, labels, icons) dynamically via JavaScript.
- **Timers:** Usage of `setTimeout` and `clearTimeout` to manage the dismissal of alert messages, ensuring a smooth user experience even with rapid interactions.
- **Accessibility:** Proper use of semantic tags and `label` association with unique IDs for inputs.

## 📂 Project Structure

```text
quicklist/
├── assets/          # Icons and images (SVG)
├── styles/          # CSS files (Global styles, Layouts)
├── index.html       # Main HTML structure
├── script.js        # Application logic
└── README.md        # Project documentation
```

## ℹ️ How to Run

1. Clone this repository:
   ```bash
   git clone [https://github.com/AndrePassoni/Quicklist.git](https://github.com/AndrePassoni/Quicklist.git)
   ```

2. Navigate to the project directory:
   ```bash
   cd Quicklist
   ```

3. Open the `index.html` file in your favorite browser.

---

## 📝 License

This project is under the MIT license.

---

<p align="center">
  Made with 💜 by <a href="https://github.com/AndrePassoni">André Passoni</a>
</p>