export class AppUtils {
  constructor() {}

  static deepClone(value: any) {
    return JSON.parse(JSON.stringify(value));
  }
}
