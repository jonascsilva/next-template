import { Context, createContext, useContext } from 'react'

const createContextAndHook = <Type>(name: string): [Context<Type | undefined>, () => Type] => {
  const context = createContext<Type | undefined>(undefined)

  function useContextHook() {
    const contextValue = useContext(context)

    if (contextValue === undefined) {
      throw new Error(`use${name} must be within its provider`)
    }

    return contextValue
  }

  return [context, useContextHook]
}

export { createContextAndHook }
