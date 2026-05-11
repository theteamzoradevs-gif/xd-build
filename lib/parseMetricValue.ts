export type ParsedMetric = {
  end: number;
  prefix: string;
  suffix: string;
  decimals: number;
};

/**
 * Parses display strings like "500+", "98%", "12M+", "12k+", "15", "9.5%".
 */
export function parseMetricValue(input: string): ParsedMetric {
  const trimmed = input.trim();
  if (!trimmed) {
    return { end: 0, prefix: "", suffix: "", decimals: 0 };
  }

  const startIdx = trimmed.search(/\d/);
  if (startIdx === -1) {
    return { end: 0, prefix: trimmed, suffix: "", decimals: 0 };
  }

  const prefix = trimmed.slice(0, startIdx);
  let i = startIdx;
  while (i < trimmed.length && /[\d.,]/.test(trimmed[i]!)) {
    i += 1;
  }

  const numStr = trimmed.slice(startIdx, i).replace(/,/g, "");
  const suffix = trimmed.slice(i);
  const end = Number.parseFloat(numStr);
  const safeEnd = Number.isFinite(end) ? end : 0;
  const decMatch = /\.(\d+)/.exec(numStr);
  const decimals = decMatch ? decMatch[1].length : 0;

  return { end: safeEnd, prefix, suffix, decimals };
}
