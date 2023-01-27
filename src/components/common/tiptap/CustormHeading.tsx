import BaseHeading from "@tiptap/extension-heading"
import { mergeAttributes } from "@tiptap/core"

type Levels = 1 | 2 | 3 | 4 | 5 | 6
const classes: Record<Levels, string> = {
  1: "font-extrabold text-3xl md:text-4xl text-red-400 py-5",
  2: "font-extrabold text-2xl md:text-3xl text-red-400 py-4",
  3: "font-bold text-xl md:text-2xl text-red-400 py-3",
  4: "font-bold text-lg md:text-xl text-red-400 py-2",
  5: "font-bold text-base md:text-lg text-red-400 py-1",
  6: "font-bold text-base text-red-400 py-0.5"
}

const CustomHeading = BaseHeading.configure({ levels: [1, 2, 3, 4, 5, 6]}).extend({
  renderHTML({ node, HTMLAttributes }) {
    const hasLevel = this.options.levels.includes(node.attrs.level);
    const level: Levels = hasLevel ? node.attrs.level : this.options.levels[0]

    return [
      `h${level}`,
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        class: `${classes[level]}`
      }),
      0
    ]
  }
});

export default CustomHeading
