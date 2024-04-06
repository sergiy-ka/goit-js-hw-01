/**
 * Get total width of element
 * @param {string} content - width of content
 * @param {string} padding - width of padding
 * @param {string} border - width of border
 * @returns {number} - total width of element
 */
function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding);
  const borderWidth = parseFloat(border);
  return contentWidth + paddingWidth * 2 + borderWidth * 2;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
