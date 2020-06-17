import h from '@h'
import * as f from '@f'

export default (page) =>
  document.head.append(<meta charset={f.or(page.charset, 'utf-8')} />)
