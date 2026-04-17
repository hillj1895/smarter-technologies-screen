type Stack = "STANDARD" | "SPECIAL" | "REJECTED";

export function sort(width: number, height: number, length: number, mass: number): Stack {
  const isBulky = width * height * length >= 1_000_000 || width >= 150 || height >= 150 || length >= 150;
  const isHeavy = mass >= 20;

  if (isBulky && isHeavy) return "REJECTED";
  if (isBulky || isHeavy) return "SPECIAL";
  return "STANDARD";
}
