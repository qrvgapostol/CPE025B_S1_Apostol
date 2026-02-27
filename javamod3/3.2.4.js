function calculateBoxVolume(width, height, length) {
    if (
      typeof width !== "number" || !isFinite(width) || width <= 0 ||
      typeof height !== "number" || !isFinite(height) || height <= 0 ||
      typeof length !== "number" || !isFinite(length) || length <= 0
    ) {
      throw new Error("Invalid input: width, height, and length must be positive numbers.");
    }
  
    const volume = width * height * length;
    return volume;
  }
  
  // Example usage:
  try {
    const width = 20;
    const height = 10;
    const length = 50;
    const volume = calculateBoxVolume(width, height, length);
    console.log(`The volume of the box is: ${volume}`);
  } catch (error) {
    console.error(error.message);
  }