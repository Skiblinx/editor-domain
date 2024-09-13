export type ElementType =
  | 'div'
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'img'
  | 'a';

export interface Element {
  type: ElementType;
  props: Record<string, any>;
  children: Element[];
  node: HTMLElement | any;
}

export interface ElementProps {
    [key: string]: any;
    style?: Record<string, any>;
    dataset?: Record<string, any>;
    eventListeners?: Record<string, EventListener>;
  }