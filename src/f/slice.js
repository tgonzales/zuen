import * as f from '@f'

/**
 * Recorta um um litera/matrix
 *
 * @name slice
 * @function
 * @access public
 * @param {Array|String} target Elemento que seram redimensionado
 * @param {Number} start O ponto de inicio do recorte
 * @param {Number} end O ponto finao no recorte
 * @returns {Array|String} O literal ou matrix com as novas dimenssoes
 */
const slice = (target, start, end) =>
  target.slice(start, end)

export default f.curry(slice)