import { Element, ElementType, ElementProps } from './elementTypes';

export const createElement1 = (
  type: ElementType,
  props: Record<string, any>,
  children: Element[] = []
): Element => {
  // Validate element type
  if (!isValidElementType(type)) {
    throw new Error(`Invalid element type: ${type}`);
  }

  // Validate properties based on element type
  validateProps(type, props);

  // Create the element object
  const element: Element = {
    type,
    props,
    children,
    node: document.createElement(type)
  };

  // Perform additional operations or transformations if needed
  return element;
};

const isValidElementType = (type: ElementType): boolean => {
  const validTypes = ['div', 'p', 'h1', 'h2', 'h3', 'img', 'a'];
  return validTypes.includes(type);
};

const validateProps = (type: ElementType, props: Record<string, any>): void => {
  const requiredProps: Record<ElementType, string[]> = {
    div: [],
    p: [],
    h1: [],
    h2: [],
    h3: [],
    img: ['src'],
    a: ['href'],
  };

  const invalidProps = Object.keys(props).filter(
    (prop) => !isValidProp(type, prop)
  );

  if (invalidProps.length > 0) {
    throw new Error(
      `Invalid props for ${type} element: ${invalidProps.join(', ')}`
    );
  }

  const missingProps = requiredProps[type].filter(
    (prop) => !Object.keys(props).includes(prop)
  );

  if (missingProps.length > 0) {
    throw new Error(
      `Missing required props for ${type} element: ${missingProps.join(', ')}`
    );
  }
};

const isValidProp = (type: ElementType, prop: string): boolean => {
  const validProps: Record<ElementType, string[]> = {
    div: ['id', 'className', 'style'],
    p: ['id', 'className', 'style'],
    h1: ['id', 'className', 'style'],
    h2: ['id', 'className', 'style'],
    h3: ['id', 'className', 'style'],
    img: ['id', 'className', 'style', 'src', 'alt', 'width', 'height'],
    a: ['id', 'className', 'style', 'href', 'target'],
  };

  return validProps[type].includes(prop);
};

export function createElement(document: Document){
    return (type: ElementType, props: ElementProps, children: Element[] = []): Element => {
        if (!isValidElementType(type)) {
          throw new Error(`Invalid element type: ${type}`);
        }
    
        validateProps(type, props);
    
        const element: Element = {
          type,
          props,
          children,
          node: document.createElement(type),
        };
    
        // Set properties on the DOM element
        Object.entries(props).forEach(([prop, value]) => {
          if (prop === 'style') {
            Object.assign(element.node.style, value);
          } else if (prop === 'dataset') {
            Object.entries(value).forEach(([key, value]) => {
              element.node.dataset[key] = value;
            });
          } else if (prop === 'eventListeners') {
            Object.entries(value).forEach(([event, listener]) => {
              element.node.addEventListener(event, listener);
            });
          } else {
            (element.node as any)[prop] = value;
          }
        });
    
        // Append child elements to the DOM
        children.forEach((child) => {
          element.node.appendChild(child.node);
        });
    
        return element;
    };
}