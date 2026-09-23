import { useCallback, useEffect, useRef, useState } from "react";

interface UseTimerResult {
  elapsedMilliseconds: number;
  isRunning: boolean;
  start: () => void;
  stop: () => number; // retorna o tempo decorrido no momento da parada
  reset: () => void;
}

/**
 * Timer baseado em milissegundos (Date.now()), atualizado a cada 50ms
 * apenas para exibição. O cálculo de pontuação sempre usa o valor exato
 * de `elapsedMilliseconds`, nunca um contador inteiro de segundos.
 */
export function useTimer(): UseTimerResult {
  const [elapsedMilliseconds, setElapsedMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimeRef = useRef<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTick = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    startTimeRef.current = Date.now();
    setElapsedMilliseconds(0);
    setIsRunning(true);

    clearTick();
    intervalRef.current = setInterval(() => {
      if (startTimeRef.current !== null) {
        setElapsedMilliseconds(Date.now() - startTimeRef.current);
      }
    }, 50);
  }, [clearTick]);

  const stop = useCallback((): number => {
    clearTick();
    setIsRunning(false);

    if (startTimeRef.current === null) return 0;
    const finalElapsed = Date.now() - startTimeRef.current;
    setElapsedMilliseconds(finalElapsed);
    return finalElapsed;
  }, [clearTick]);

  const reset = useCallback(() => {
    clearTick();
    setIsRunning(false);
    setElapsedMilliseconds(0);
    startTimeRef.current = null;
  }, [clearTick]);

  useEffect(() => clearTick, [clearTick]);

  return { elapsedMilliseconds, isRunning, start, stop, reset };
}
