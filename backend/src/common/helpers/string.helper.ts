export class StringHelper {
  static slugify(str: string): string {
    return str
      .toLowerCase()
      .normalize('NFD') // Remove acentos
      .replace(/[\u0300-\u036f]/g, '') // Remove marcas Unicode
      .replace(/[^a-z0-9]+/g, '-') // Substitui não alfanuméricos por hífens
      .replace(/^-+|-+$/g, ''); // Remove hífens do início/fim
  }

  static capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  static randomString(length = 8): string {
    return Math.random()
      .toString(36)
      .substring(2, 2 + length);
  }
}
