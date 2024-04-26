import { ReactNode } from 'react';

function calculateReadingMin(text: string) {
  const wordsPerMinute = 200;
  const numberOfWords = text.split(/\s/g).length;
  return Math.ceil(numberOfWords / wordsPerMinute);
}

// Function to extract text content from JSX element
function extractTextFromElement(element: ReactNode): string {
  if (typeof element === 'string') {
    // If the element is a string, return it
    return element;
  } else if (Array.isArray(element)) {
    // If the element is an array of JSX elements, concatenate their text content
    return element.map(extractTextFromElement).join('');
  } else if (element && typeof element === 'object' && 'props' in element) {
    // If the element is a React component, recursively extract text from its children
    const { children } = element.props;
    if (children) {
      return extractTextFromElement(children);
    }
  }
  // Default case: return an empty string
  return '';
}

export function readingTime(element: ReactNode): number | undefined {
  // Extract text content from the JSX element
  // TODO: not working properly
  const text = extractTextFromElement(element);

  const myTime = calculateReadingMin(text);

  if (myTime <= 1) {
    return undefined;
  }
  return myTime;
}
