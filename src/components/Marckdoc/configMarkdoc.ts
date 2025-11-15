import type { Config, Schema } from '@markdoc/markdoc'
import { Fence } from './Fence/Fence'
import { Code } from './Code/Code'
import { Heading } from './Heading/Heading'
import { Callout } from './Callout/Callout'

const nodes: Config['nodes'] = {
  heading: {
    render: 'Heading',
    attributes: {
      level: { type: Number, required: true }
    }
  } satisfies Schema,
  fence: {
    render: 'Fence',
    attributes: {
      content: { type: String, required: true },
      language: { type: String, required: true }
    },
  } satisfies Schema,
  code: {
    render: 'Code',
    attributes: {
      content: { type: String, required: true }
    }
  } satisfies Schema,
  blockquote: {
    render: 'Callout',
    attributes: {
      type: { type: String, default: 'note' }
    }
  } satisfies Schema
}

const tags: Config['tags'] = {
  callout: {
    render: 'Callout',
    attributes: {
      type: {
        type: String,
        matches: ['note', 'caution', 'danger', 'tip', 'info'],
        default: 'note'
      },
      title: { type: String }
    }
  }
}

export const configMarkdoc: Config = {
  nodes,
  tags
}

export const renderOpts = {
  components: {
    Fence,
    Code,
    Heading,
    Callout
  },
}
