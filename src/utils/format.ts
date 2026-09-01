export function formatPrice(value: number): string {
  return `AED ${new Intl.NumberFormat('en-AE', {
    maximumFractionDigits: 0,
  }).format(value)}`;
}