let imageMap = {};

// ./data/images.json файлаас бүх зургийн замыг авна.
export async function loadImages() {
  // Аль хэдийн ачаалагдсан бол дахин ачаалахгүй.
  if (Object.keys(imageMap).length > 0) return;

  const response = await fetch("./data/images.json");
  if (!response.ok) {
    throw new Error("Failed to load images.json");
  }

  // { "01_0001": ["img/foods/01_0001_001.jpg", ...], ... }
  imageMap = await response.json();
}

// "01_0001" -> ["img/foods/01_0001_001.jpg", ...]
export function getImagesByFoodCode(foodCode) {
  return imageMap[foodCode] || [];
}
