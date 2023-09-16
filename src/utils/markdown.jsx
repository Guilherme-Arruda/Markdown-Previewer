const markdown = `## Heading

# Heading h1
## Heading h2
### Heading h3
#### Heading h4
##### Heading h5
###### Heading h6

## Bold

**bold text**

## Italic

*italicized text*

## Blockquote

> blockquote

## Ordered List

1. Item 1
1. Item 2
1. Item 3

## Unordered List

* Item 1
* Item 2
* Item 3

## Code

\`print("Hello World!")\`

## Block of Code

\`\`\`
def soma(a, b):
  return a + b
\`\`\`

## Horizontal Rule

---

## Link

[Markdown Previewer](https://github.com/Guilherme-Arruda/Markdown-Previewer).

## Image

![This is a alt text.](https://2.bp.blogspot.com/-AG1xE6WdtMY/UEtxjZNBCII/AAAAAAAAA4k/OXdLm9zR8f4/s1600/k-on_ritsu_icon.jpg)

## Table

| Left columns | Right columns |
| ------------ | ------------- |
|   left foo   |   right foo   |
|   left bar   |   right bar   |
|   left baz   |   right baz   |

## Footnote

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

## Strikethrough

~~Strikethrough text~~

## Task List

- [x] Item 1
- [ ] Item 2
- [ ] Item 3`;

export default markdown;
