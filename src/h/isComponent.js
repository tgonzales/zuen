import * as f from '@f'

/**
 * Havalia se o elemento eh um component
 *
 * @name isComponent
 * @function
 * @access private
 * @param {*} element Elemento ha ser havaliado
 * @return {Boolean} Verdadeiro se o elemento eh um component
 */
export default (target) =>
  f.test(/Function/g, ({}).toString.call(target))
