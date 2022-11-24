export type ShirtSize = 'S' | 'M' | 'L' | 'XL';
/**
 * A Product is an object with a title, createdAt, and stock property, and an optional size property.
 * @property {string} title - string;
 * @property {Date} createdAt - Date;
 * @property {number} stock - number;
 * @property {ShirtSize} size - ShirtSize | undefined
 */
export type Product = {
  name: string;
  createdAt: Date;
  stock: number;
  size?: ShirtSize;
};
