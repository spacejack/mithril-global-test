// This declaration is needed if you are writing modules but are
// using mithril.js as a separate script.

import * as _m from 'mithril-global'

declare global {
  const m: typeof _m;
}
