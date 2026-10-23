# Boojum Trail Compliance Checker 🌮

A web tool that validates food-safety temperature logs against regulations,
built for internal use in a restaurant environment.

🔗 **Live demo:** <https://garciahelena.github.io/Boojum-Compliance-Trail-Checker/>

## Why I built it
Checking temperature logs is boring, but it's essential because it's what keeps
the food we serve safe. The process meant writing readings by hand, re-typing them
digitally, then checking everything again, ~20 minutes every time. So I built a tool
that does the checking for me and brings it down to ~3 minutes.

## Features
- Validates each log entry against food-safety rules, checking the **food item**, **temperature**, **staff member who submitted it** and **time submitted**
- Flags out-of-range readings with clear visual indicators
- Plain HTML/CSS/JavaScript, so there's nothing to install
- Responsive layout that works on desktop and mobile

## Built with
- **HTML5**: structure for the logs and checklists
- **CSS3**: custom, responsive styling
- **JavaScript (ES6)**: validation logic and DOM updates

## Project structure
```
├── index.html    # App layout
├── styles.css    # Styling and layout
├── script.js     # Validation logic and interactivity
└── README.md
```

## How to run
1. `git clone https://github.com/garciahelena/Boojum-Compliance-Trail-Checker.git`
2. Open `index.html` in your browser. No installation needed.

## What I learned / what's next
- Turned a real, repetitive workflow into software and measured the result
- **Planned:** an AI assistant built into the tool that summarises each check and answers
  staff questions about the logs. When everything is fine, it will simply say:
  *"No gaps or issues."*

> The data in this demo is made up. No real company data is included.
