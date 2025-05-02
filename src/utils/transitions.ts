
// Array of possible enter animations
export const enterAnimations = [
  "fade-in",
  "scale-in",
  "slide-in-right"
];

// Get a random animation from the array
export const getRandomAnimation = (): string => {
  const randomIndex = Math.floor(Math.random() * enterAnimations.length);
  return enterAnimations[randomIndex];
};
