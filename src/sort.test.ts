import { sort } from "./sort";

describe("sort", () => {
  describe("STANDARD", () => {
    it("routes a normal package", () => {
      expect(sort(10, 10, 10, 5)).toBe("STANDARD");
    });

    it("is just below bulky volume threshold", () => {
      expect(sort(99, 100, 100, 5)).toBe("STANDARD");
    });

    it("is just below heavy threshold", () => {
      expect(sort(10, 10, 10, 19)).toBe("STANDARD");
    });
  });

  describe("SPECIAL — bulky only", () => {
    it("routes when volume equals 1,000,000 cm³", () => {
      expect(sort(100, 100, 100, 5)).toBe("SPECIAL");
    });

    it("routes when volume exceeds 1,000,000 cm³", () => {
      expect(sort(200, 50, 100, 5)).toBe("SPECIAL");
    });

    it("routes when width >= 150", () => {
      expect(sort(150, 1, 1, 5)).toBe("SPECIAL");
    });

    it("routes when height >= 150", () => {
      expect(sort(1, 150, 1, 5)).toBe("SPECIAL");
    });

    it("routes when length >= 150", () => {
      expect(sort(1, 1, 150, 5)).toBe("SPECIAL");
    });
  });

  describe("SPECIAL — heavy only", () => {
    it("routes when mass equals 20 kg", () => {
      expect(sort(10, 10, 10, 20)).toBe("SPECIAL");
    });

    it("routes when mass exceeds 20 kg", () => {
      expect(sort(10, 10, 10, 100)).toBe("SPECIAL");
    });
  });

  describe("REJECTED", () => {
    it("rejects a package that is both bulky and heavy", () => {
      expect(sort(200, 200, 200, 25)).toBe("REJECTED");
    });

    it("rejects when bulky by dimension and heavy", () => {
      expect(sort(150, 1, 1, 20)).toBe("REJECTED");
    });
  });
});
