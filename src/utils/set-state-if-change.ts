import equal from 'fast-deep-equal'

export function setIfChanged<T extends Record<PropertyKey, unknown>, K extends keyof T>(state: T, action: { payload: T[K] }, key: K): void {
  if (equal(state[key], action.payload)) return
  state[key] = action.payload
}
