/** Um retângulo de pixels numa cena SVG. */
export interface Pixel {
  x: number;
  y: number;
  w: number;
  h: number;
  fill: string;
  /** Classe CSS opcional (ex.: animações). */
  cls?: string;
}

export const px = (x: number, y: number, w: number, h: number, fill: string, cls?: string): Pixel => ({
  x, y, w, h, fill, cls,
});

/**
 * Converte um mapa de caracteres em pixels, unindo pixels vizinhos da mesma
 * cor na horizontal. '.' ou ' ' = transparente.
 */
export function fromMap(rows: string[], palette: Record<string, string>, ox = 0, oy = 0): Pixel[] {
  const out: Pixel[] = [];
  rows.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const ch = row[x];
      const fill = palette[ch];
      if (!fill) {
        x++;
        continue;
      }
      let w = 1;
      while (row[x + w] === ch) w++;
      out.push(px(ox + x, oy + y, w, 1, fill));
      x += w;
    }
  });
  return out;
}
