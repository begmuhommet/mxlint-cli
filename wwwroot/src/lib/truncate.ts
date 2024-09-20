export function splitCamelCase(str: string | null | undefined) {
  if (str === null || str === undefined) return null;
  return str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
}

export const truncateEnd = (value: string | null = '', limit: number = 10) => {
  if (!value) return '';
  return value.length > limit ? `${value.slice(0, limit)}...` : value;
};

export function truncateCenter(str: string | null | undefined, maxLength?: number) {
  if (str === null || str === undefined) return null;

  if (maxLength !== undefined) {
    if (str.length <= maxLength) return str;
    return `${str.slice(0, maxLength - 2)}...${str.slice(-maxLength - 2)}`;
  }

  if (str.length <= 10) return str;
  return `${str.slice(0, 10)}...${str.slice(-10)}`;
}
