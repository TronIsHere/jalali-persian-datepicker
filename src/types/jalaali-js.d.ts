declare module "jalaali-js" {
  export function toJalaali(
    gy: number,
    gm: number,
    gd: number
  ): { jy: number; jm: number; jd: number };
  export function toJalaali(date: Date): { jy: number; jm: number; jd: number };
  export function toGregorian(
    jy: number,
    jm: number,
    jd: number
  ): { gy: number; gm: number; gd: number };
  export function isValidJalaaliDate(
    jy: number,
    jm: number,
    jd: number
  ): boolean;
  export function isLeapJalaaliYear(jy: number): boolean;
  export function jalaaliMonthLength(jy: number, jm: number): number;
  export function jalCal(jy: number): number[];
  export function j2d(jy: number, jm: number, jd: number): number;
  export function d2j(jdn: number): { jy: number; jm: number; jd: number };
  export function g2d(gy: number, gm: number, gd: number): number;
  export function d2g(jdn: number): { gy: number; gm: number; gd: number };
}
