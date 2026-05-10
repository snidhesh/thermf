const rateLimit = new Map<string, { count: number; lastReset: number }>();

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 10;

export function checkRateLimit(
  identifier: string,
  maxRequests = MAX_REQUESTS
): { success: boolean; remaining: number } {
  const now = Date.now();
  const entry = rateLimit.get(identifier);

  if (!entry || now - entry.lastReset > WINDOW_MS) {
    rateLimit.set(identifier, { count: 1, lastReset: now });
    return { success: true, remaining: maxRequests - 1 };
  }

  if (entry.count >= maxRequests) {
    return { success: false, remaining: 0 };
  }

  entry.count++;
  return { success: true, remaining: maxRequests - entry.count };
}

// Cleanup stale entries periodically
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of rateLimit.entries()) {
      if (now - entry.lastReset > WINDOW_MS * 2) {
        rateLimit.delete(key);
      }
    }
  }, WINDOW_MS * 5);
}
