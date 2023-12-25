export function handleError(error: unknown): void {
  if (error instanceof Error) {
    if (error instanceof TypeError) {
      console.error(`Type Error: ${error.message}`);
      // Handle type error-specific logic if needed
    } else if (error instanceof ReferenceError) {
      console.error(`Reference Error: ${error.message}`);
      // Handle reference error-specific logic if needed
    } else if (error instanceof SyntaxError) {
      console.error(`Syntax Error: ${error.message}`);
      // Handle syntax error-specific logic if needed
    } else {
      console.error(`General Error: ${error.message}`);
      // Handle other types of errors
    }
  } else {
    console.error(
      `An unexpected error occurred: ${getErrorDescription(error)}`
    );
    // Handle non-Error types as needed
  }
}

function getErrorDescription(error: unknown): string {
  if (
    error instanceof Object &&
    "toString" in error &&
    typeof (error as any).toString === "function"
  ) {
    return (error as any).toString();
  } else {
    return "Unknown error";
  }
}
