export class DateHelper {
  static now(): string {
    return new Date().toISOString();
  }

  static addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  static format(date: Date | string, locale = 'pt-BR'): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toLocaleDateString(locale);
  }

  static diffInDays(a: Date, b: Date): number {
    const diff = Math.abs(a.getTime() - b.getTime());
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }
}
