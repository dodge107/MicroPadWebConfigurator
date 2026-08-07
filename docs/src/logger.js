/**
 * Simple structured logger with categories and UI toast integration.
 */

export const LOG_LEVELS = { ERROR: 0, WARN: 1, INFO: 2, DEBUG: 3 };

class Logger {
  constructor() {
    this.level = LOG_LEVELS.INFO;
    this.history = [];
    this.listeners = [];
    this.startTime = Date.now();
  }

  setLevel(level) { this.level = level; }

  _log(level, category, message, data) {
    if (level > this.level) return;
    const entry = {
      level: Object.keys(LOG_LEVELS).find(k => LOG_LEVELS[k] === level),
      category,
      message,
      data,
      elapsed: ((Date.now() - this.startTime) / 1000).toFixed(1),
      time: new Date().toISOString(),
    };
    this.history.push(entry);

    // Console output
    const prefix = `[${entry.elapsed}s][${category}]`;
    if (level === LOG_LEVELS.ERROR) console.error(prefix, message, data || '');
    else if (level === LOG_LEVELS.WARN) console.warn(prefix, message, data || '');
    else if (level === LOG_LEVELS.DEBUG) console.debug(prefix, message, data || '');
    else console.log(prefix, message, data || '');

    // Notify listeners
    for (const fn of this.listeners) fn(entry);
  }

  error(cat, msg, data) { this._log(LOG_LEVELS.ERROR, cat, msg, data); }
  warn(cat, msg, data)  { this._log(LOG_LEVELS.WARN, cat, msg, data); }
  info(cat, msg, data)  { this._log(LOG_LEVELS.INFO, cat, msg, data); }
  debug(cat, msg, data) { this._log(LOG_LEVELS.DEBUG, cat, msg, data); }

  addListener(fn) { this.listeners.push(fn); }
  getHistory(minLevel = LOG_LEVELS.DEBUG) {
    return this.history.filter(e => LOG_LEVELS[e.level] <= minLevel);
  }
  clear() { this.history = []; }
}

export const logger = new Logger();
