import { createContext, useContext } from 'react';
import { useProgress } from './useProgress';

export type ProgressApi = ReturnType<typeof useProgress>;

export const ProgressContext = createContext<ProgressApi | null>(null);

export function useProgressCtx(): ProgressApi {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('ProgressContext 未提供');
  return ctx;
}

export { useProgress };
