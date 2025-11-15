---
title: Markdown sintaxis
description: Aprendiendo a usar la sintaxis de markdown
order: 1
---

# Markdown syntax guide

## Headers

# This is a Heading h1

## This is a Heading h2

###### This is a Heading h6

## Emphasis

*This text will be italic*
_This will also be italic_

**This text will be bold**  
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2
* Item 2a
* Item 2b
  * Item 3a
  * Item 3b

### Ordered

1. Item 1
2. Item 2
3. Item 3
    1. Item 3a
    2. Item 3b

## Images

![This is an alt text.](https://www.mowomo.com/wp-content/uploads/2025/08/aprender-css-estructura-basica-1.png "This is a sample image.")

## Links

You may be using [Markdown Live Preview](https://markdownlivepreview.com/).

## Blockquotes

> **Markdown** is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

```md
> **Markdown** is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
```

> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

{% callout %}
**Note no prop** Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
{% /callout %}

```md
{% callout %}
**Note no prop** Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
{% /callout %}
```

{% callout type="note" %}
**Note** Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
{% /callout %}

{% callout type="caution" %}
**Caution** Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
{% /callout %}

{% callout type="danger" %}
**Danger** Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
{% /callout %}

{% callout type="info" %}
**Info** Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
{% /callout %}

{% callout type="tip" %}
**Tip** Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
{% /callout %}

{% callout type="tip" title="Custom Tittle" %}
**Tip custom tittle** Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
{% /callout %}

## Tables

| Left columns  | Right columns | Right columns |
| ------------- |:-------------:|:-------------:|
| left foo      | right foo     | right foo     |
| left bar      | right bar     | right foo     |
| left baz      | right baz     | right foo     |

## Blocks of code

``` javascript
let message = 'Hello world';
alert(message);
```

## Inline code

This web site is using `markedjs/marked`.
