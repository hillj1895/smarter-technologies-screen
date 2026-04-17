# Smarter Technologies — Package Sorter

A TypeScript implementation of a robotic arm dispatch function that routes packages to the correct stack based on their volume and mass.

## Rules

| Condition | Label |
|---|---|
| Volume ≥ 1,000,000 cm³ **or** any dimension ≥ 150 cm | Bulky |
| Mass ≥ 20 kg | Heavy |

| Package type | Stack |
|---|---|
| Neither bulky nor heavy | **STANDARD** |
| Bulky **or** heavy (not both) | **SPECIAL** |
| Bulky **and** heavy | **REJECTED** |

## Usage

```ts
import { sort } from "./src/sort";

sort(10, 10, 10, 5);      // "STANDARD"
sort(100, 100, 100, 5);   // "SPECIAL"  — bulky by volume
sort(1, 150, 1, 5);       // "SPECIAL"  — bulky by dimension
sort(10, 10, 10, 20);     // "SPECIAL"  — heavy
sort(200, 200, 200, 25);  // "REJECTED" — bulky and heavy
```

## Setup

```bash
npm install
```

## Running Tests

```bash
npm test
```

## Project Structure

```
src/
  sort.ts        # dispatch function
  sort.test.ts   # Jest test suite
```
