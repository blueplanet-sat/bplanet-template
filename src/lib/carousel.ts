export function getNextIndex(currentIndex: number, total: number): number {
  return (currentIndex + 1) % total;
}

export function getPrevIndex(currentIndex: number, total: number): number {
  return (currentIndex - 1 + total) % total;
}
