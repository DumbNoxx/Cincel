export const Template = `# Welcome to my Markdown Previewer!

## This is a sub-heading
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`javascript
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine === '' && lastLine === '') {
    // it will return a multi-line code block.
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or... _italic_.
Or... **_both!_**
And finally, a ~~strikethrough~~ text.

There are [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get crazy, even tables:

| Wild Header | Crazy Header | Another Header? |
| ------------ | ------------- | ------------- |
| Your table content can be here. | And here. | And here too... |
| And here. | Okay, I think you get the point. | Let's add one more... |

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's embed an image:

![Cincel logo](data:image/jpeg;base64,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)
`;
