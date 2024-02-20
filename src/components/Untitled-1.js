const htmlContent = '<h1>Title</h1><h2>Section 1</h2><p>Content under section 1</p><h3>Subsection</h3><p>Content under subsection</p><h2>Section 2</h2><p>Content under section 2</p>'

// Regular expression to match <h2 or <h3
const regex = /(<h2|<h3)/g

// Split the string at each occurrence of <h2 or <h3
const parts = htmlContent.split(regex)

// parts will contain an array where each entry is either a piece of the original string
// or <h2, <h3 depending on where the splits occurred.
console.log(parts)

// To keep the delimiter as part of the subsequent string (if needed), you can adjust the approach:
const adjustedParts = htmlContent.split(regex).reduce((acc, current, index, array) => {
  if (index % 2 === 0) { // Even indexes are the content
    acc.push((array[index - 1] || '') + current)
  }
  return acc
}, [])

console.log(adjustedParts)
