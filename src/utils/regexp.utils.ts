/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: regexp.utils
 * @description: Regular expressions module. Intended to be used as
 * source of expressions to identify, validate, or found a relation
 */

/* --------------------------------------------- */

/** @exports @module @enum Regexp */
export const Regexp = {
   email: /^([\w\d.])+@([\w\d])+.([a-z]{3})$/g,
   mobileDevice:
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/,
   oneCapital: /[A-Z]+/g,
   oneNumber: /\d+/g,
   oneSpecialChar: /[!@#$%^&*()_+\-=¿¡`´¨ºª[\]{};':"\\|,.<>/?]+/g,
   tabletDevice: /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i,
};
