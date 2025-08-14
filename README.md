## Countdown Timer
A beautiful, responsive countdown timer web application that allows users to set a target date and time, then displays a real-time countdown with days, hours, minutes, and seconds remaining.

## Features

- **Real-time Countdown**: Live updating display showing days, hours, minutes, and seconds
- **Interactive Interface**: Easy-to-use date and time picker inputs
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Visual Feedback**: Elegant animations and color-coded messages
- **Sound Notification**: Audio alert when countdown reaches zero
- **Error Handling**: Prevents setting past dates and provides user feedback
- **Auto-Reset**: Automatically resets display when countdown completes
- **Final Countdown Effect**: Special visual effect when time is running out

## Demo

Try it out by opening `index.html` in your web browser!

## Installation

1. Clone or download this repository
2. No additional installation required - it's pure HTML, CSS, and JavaScript

## File Structure

countdown-timer/
│
├── index.html          # Main HTML structure
├── style.css           # Styling and animations
├── script.js           # JavaScript functionality
└── README.md          # This file

## Usage

1. Open `index.html` in your web browser
2. Select your target date using the date picker
3. Set your target time using the time picker
4. Click "Start Countdown" to begin the timer
5. Watch the real-time countdown display
6. Use "Reset" button to clear and start over

### Default Behavior

- The application automatically sets a default time 1 hour from the current time
- Past dates are disabled in the date picker
- Error messages appear for invalid inputs

## Technical Details

### HTML Structure
- Semantic HTML5 markup
- Accessible form inputs with proper labels
- Responsive meta viewport tag

### CSS Features
- Modern gradient backgrounds
- Glass morphism effects with backdrop blur
- CSS Grid for responsive timer display
- Smooth transitions and hover effects
- Mobile-first responsive design
- CSS animations for visual feedback

## JavaScript Functionality
- Real-time countdown calculation using `setInterval()`
- Date/time validation
- Dynamic DOM manipulation
- Audio notification on completion
- Cross-browser compatible

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

# Customization

## Colors
Edit the CSS gradients in `style.css`:
css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);


### Timer Layout
Modify the grid layout in `.timer-display`:
 css
grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
