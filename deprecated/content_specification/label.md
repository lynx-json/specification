# Label

The `label` property of a specification describes how to label a value.

## Format Rules

- The `label` property is OPTIONAL.
- If present, the value MUST be a [same-document reference](#same-document-reference) to the source of the label content.

## Example

```json
{
  "commentsLabel": "What did you think of the movie?",
  "comments": null,
  "spec":{
    "hints": [ "form" ],
    "children": [
      {
        "name": "commentsLabel",
        "hints": [ "text" ]
      },
      {
        "name": "comments",
        "hints": [ "text" ],
        "input": true,
        "label": "#commentsLabel"
      }
    ]
  }
}
```
