import React from 'react';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomChecked() {
  return Math.random() < 0.5; // 50% chance to be true or false
}

function CheckboxGrid() {
  const checkboxes = [];

  for (let i = 0; i < 15000; i++) { // 15,000 checkboxes for 100x150 grid
    const randomColor = getRandomColor();
    const isChecked = getRandomChecked();
    checkboxes.push(
      <input 
        key={i} 
        type="checkbox" 
        style={{ backgroundColor: randomColor }} 
        defaultChecked={isChecked} 
      />
    );
  }

  return (
    <div style={styles.checkboxGrid}>
      {checkboxes}
    </div>
  );
}

const styles = {
  checkboxGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(20px, 1fr))', // auto-adjusting columns
    gridGap: '2px', // space between checkboxes
    width: '100vw', // make sure it covers the full viewport width
    height: '100vh', // make sure it covers the full viewport height
    boxSizing: 'border-box', // include padding and border in the element's width and height
  },
};

export default CheckboxGrid;
