# Title

A `title` hint describes a value that that represents a distinguishing name for something.

## Format Rules
- MUST comply with the rules defined for [text](#text).
- MUST precede the `text` hint.

## Example

```json
{
  "title": "Fletch",
  "spec": {
    "hints": [ "object" ],
    "children": [
      {
        "name": "title",
        "hints": [ "title", "text" ]
      }
    ]
  }
}
```

## User Agent Considerations

- MUST comply with the rules defined for [text](#text).
- A user agent may display a title more prominently or in a different order than other text.
