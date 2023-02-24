export enum MathOperations {
  // Arithmetic operators
  Plus = "+",
  Minus = "-",
  Multiply = "\\times",
  Divide = "\\div",
  Dot = "\\cdot",
  PlusMinus = "\\pm",
  MinusPlus = "\\mp",
  Over = "\\over",
  SquareRoot = "\\sqrt{a}",

  // Comparison operators
  Equals = "=",
  NotEquals = "\\neq",
  ApproximatelyEquals = "\\approx",
  LessThanOrEqual = "\\leq",
  GreaterThanOrEqual = "\\geq",
  MuchLessThan = "\\ll",
  MuchGreaterThan = "\\gg",
  Subset = "\\subset",
  Superset = "\\supset",

  // Set operators
  Union = "\\cup",
  Intersection = "\\cap",
  EmptySet = "\\emptyset",
  ElementOf = "\\in",
  NotElementOf = "\\notin",
  SubsetOrEqual = "\\subseteq",
  SupersetOrEqual = "\\supseteq",

  // Calculus operators
  PartialDerivative = "\\partial",
  Gradient = "\\nabla",
  Infinity = "\\infty",
  Integral = "\\int_{[a,b]}^{} f(x) \\, dx", // Placeholder for limits and function
  Sigma = "\\sum_{i=1}^{n} {i}", // Placeholder for index and expression
  Product = "\\prod_{i=1}^{n} {i}", // Placeholder for index and expression
}
