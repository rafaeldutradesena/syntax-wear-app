/**
 * Format a number into a Brazilian Real (BRL) currency string.
 *
 * @param {number} value - The number to format.
 * @returns {string} A string foramteed as BRL currency (e.g., "R$ 1.234,56").
 */
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}