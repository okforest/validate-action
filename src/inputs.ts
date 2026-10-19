export type FailOn = "error" | "warning" | "never"

export interface Inputs {
  /** The tree's root, as the user gave it (relative to the workspace). */
  path: string
  failOn: FailOn
  diagrams: boolean
  annotations: boolean
  summary: boolean
}

const FAIL_ON: readonly FailOn[] = ["error", "warning", "never"]

/** Read and check the inputs declared in action.yaml. */
export function readInputs(getInput: (name: string) => string): Inputs {
  const failOn = getInput("fail-on").trim() || "error"
  if (!FAIL_ON.includes(failOn as FailOn)) {
    throw new Error(`fail-on must be one of ${FAIL_ON.join(", ")} (got "${failOn}").`)
  }
  return {
    path: getInput("path").trim() || ".",
    failOn: failOn as FailOn,
    diagrams: boolean(getInput, "diagrams"),
    annotations: boolean(getInput, "annotations"),
    summary: boolean(getInput, "summary"),
  }
}

/** YAML 1.2 core booleans, as `core.getBooleanInput` accepts; empty means true. */
function boolean(getInput: (name: string) => string, name: string): boolean {
  const value = getInput(name).trim()
  if (value === "" || ["true", "True", "TRUE"].includes(value)) return true
  if (["false", "False", "FALSE"].includes(value)) return false
  throw new Error(`${name} must be true or false (got "${value}").`)
}
