let hoverSound;

function preload() {
  hoverSound = loadSound('hover.mp3');
}

function setup() {
  createCanvas(1920, 1080);

  // Create buttons
  let btn1 = createButton('');
  let btn2 = createButton('');
  let btn3 = createButton('');
  let btn4 = createButton('');
  
  // Position buttons
  btn1.position(150, 200);
  btn2.position(150, 240);
  btn3.position(150, 280);
  btn4.position(150, 320);
  
  // Attach event handlers for buttons
  attachHoverEffect(btn1);
  attachHoverEffect(btn2);
  attachHoverEffect(btn3);
  attachHoverEffect(btn4);

  // Style buttons with icons
  styleButton(btn1, 'annuler.png', 'Hover me');
  styleButton(btn2, 'instagram.png', 'Instagram');
  styleButton(btn3, 'linkedin.png', 'LinkedIn');
  styleButton(btn4, 'github.png', 'GitHub');
}

function draw() {
  background(220);
}

function playHoverSound() {
  hoverSound.play();
}

function scaleButtonUp(button) {
  button.style('transform', 'scale(1.1)'); // Scale up the button slightly
}

function scaleButtonDown(button) {
  button.style('transform', 'scale(1)'); // Scale back to the original size
}

function styleButton(button, iconPath, buttonText) {
  button.style('border-radius', '12.5px');
  button.style('width', '130px');
  button.style('height', '35px');
  button.style('transition', 'transform 0.2s ease');
  button.style('box-shadow', '5px 5px 15px rgba(0, 0, 0, 0.3)');
  button.style('text-align', 'left'); // Align text to the left
  button.style('display', 'flex'); // Use flexbox to align items
  button.style('align-items', 'center'); // Center content vertically
  button.style('padding-left', '10px'); // Adjust padding as needed
  
  // Create a div container for the icon and text
  let contentDiv = createDiv('');
  contentDiv.style('display', 'flex');
  contentDiv.style('align-items', 'center');

  // Create the icon image and attach it to the div
  let icon = createImg(iconPath, 'icon');
  icon.size(24, 24); // Set icon size
  icon.parent(contentDiv); // Attach the icon to the div
  icon.style('margin-right', '10px'); // Add some space between the icon and text

  // Create the text and attach it to the div
  let textSpan = createSpan(buttonText);
  textSpan.parent(contentDiv); // Attach the text to the div

  // Attach the entire content div to the button
  contentDiv.parent(button);
}

function attachHoverEffect(button) {
  button.mouseOver(() => {
    scaleButtonUp(button);
    playHoverSound();
  });
  
  button.mouseOut(() => {
    scaleButtonDown(button);
  });
}
