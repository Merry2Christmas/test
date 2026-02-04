import type { ComponentPublicInstance, VNodeNormalizedChildren } from "vue";
import { Dayjs } from "dayjs";
import type { VNode } from "vue";

const opt = Object.prototype.toString;

export function isArray(obj: any): obj is any[] {
  return opt.call(obj) === "[object Array]";
}

export function isNull(obj: any): obj is null {
  return opt.call(obj) === "[object Null]";
}

export function isBoolean(obj: unknown): obj is boolean {
  return opt.call(obj) === "[object Boolean]";
}

export function isObject(obj: any): obj is Record<string, unknown> {
  return opt.call(obj) === "[object Object]";
}

export const isPromise = <T>(obj: unknown): obj is Promise<T> => {
  return opt.call(obj) === "[object Promise]";
};

export function isString(obj: any): obj is string {
  return opt.call(obj) === "[object String]";
}

export function isNumber(obj: any): obj is number {
  return opt.call(obj) === "[object Number]" && obj === obj; // eslint-disable-line
}

export function isRegExp(obj: any) {
  return opt.call(obj) === "[object RegExp]";
}

export function isDate(obj: any) {
  return opt.call(obj) === "[object Date]";
}

function isHex(color: any) {
  return /^#[a-fA-F0-9]{3}$|#[a-fA-F0-9]{6}$/.test(color);
}

function isRgb(color: any) {
  return /^rgb\((\s*\d+\s*,?){3}\)$/.test(color);
}

function isRgba(color: any) {
  return /^rgba\((\s*\d+\s*,\s*){3}\s*\d(\.\d+)?\s*\)$/.test(color);
}

export function isColor(color: any): boolean {
  return isHex(color) || isRgb(color) || isRgba(color);
}

export function isUndefined(obj: any): obj is undefined {
  return obj === undefined;
}

export function isFunction(obj: any): obj is (...args: any[]) => any {
  return typeof obj === "function";
}

export function isEmptyObject(obj: any): boolean {
  return isObject(obj) && Object.keys(obj).length === 0;
}

export function isExist(obj: any): boolean {
  return obj || obj === 0;
}

export function isWindow(el: any): el is Window {
  return el === window;
}

export const isComponentInstance = (
  value: any,
): value is ComponentPublicInstance => {
  return value?.$ !== undefined;
};

export const isArrayChildren = (
  children: VNodeNormalizedChildren,
): children is VNode[] => {
  return isArray(children);
};

export const isQuarter = (fromat: string) => {
  return /\[Q]Q/.test(fromat);
};

export function isDayjs(time: any): time is Dayjs {
  return (
    isObject(time) &&
    "$y" in time &&
    "$M" in time &&
    "$D" in time &&
    "$d" in time &&
    "$H" in time &&
    "$m" in time &&
    "$s" in time
  );
}

export function isNullOrUndefined(obj: any): obj is null | undefined {
  return obj === null || obj === undefined;
}

export function isNullOrUndefinedOrEmptyString(
  obj: any,
): obj is null | undefined | "" {
  return obj === null || obj === undefined || obj === "";
}

export function isIdCard(value: string) {
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value);
}

export function isMobile(value: string) {
  return /^1[3456789]\d{9}$/.test(value);
}

export function isTel(value: string) {
  return /^0\d{2,3}-\d{7,8}$/.test(value);
}

export function isEmail(value: string) {
  return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
    value,
  );
}

export function isIp(value: string) {
  return /^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)$/.test(
    value,
  );
}
export function isPort(value: string) {
  return /^([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-4]\d{4}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/.test(
    value,
  );
}
export function isCIDR(value: string) {
  return /^(?:(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\/([1-9]|[1-2]\d|3[0-2])$/.test(
    value,
  );
}

export function isEmpty(value: any) {
  if (typeof value === "string" && !value) {
    return true;
  }
  if (typeof value === undefined) {
    return true;
  }
  if (Array.isArray(value) && value.length === 0) {
    return true;
  }
  if (isObject(value) && Object.keys(value).length === 0) {
    return true;
  }
  if (Object.prototype.toString.call(value).slice(8, -1) === "Null") {
    return true;
  }
  return false;
}

/**
 *
 * @param obj1 对象1
 * @param obj2 对象2
 * @returns 是否相等
 */
export function isObjectEqual(
  obj1: Record<string, any>,
  obj2: Record<string, any>,
) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (const key in obj1) {
    if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
      if (!isObjectEqual(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}
