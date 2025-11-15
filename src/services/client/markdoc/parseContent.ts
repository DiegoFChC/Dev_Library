import { parse, transform } from '@markdoc/markdoc'
import type { RenderableTreeNode, Node } from '@markdoc/markdoc'
import { configMarkdoc } from '../../../components/Marckdoc/configMarkdoc'

export function parseContentMarkdoc(data: string): RenderableTreeNode {
  // data -> Markdoc content
  // ast -> abstract syntax tree
  const ast: Node = parse(data)
  // content -> renderable tree
  const content = transform(ast, configMarkdoc)

  return content
}
