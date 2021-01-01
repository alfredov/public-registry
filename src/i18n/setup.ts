import t from 'format-message'
import generate from 'format-message-generate-id'

import en from './en.json'

export default () => {
  t.setup({
    generateId: generate.underscored_crc32,
    locale: 'en',
    missingTranslation: 'ignore',
    translations: { en },
  })
}
