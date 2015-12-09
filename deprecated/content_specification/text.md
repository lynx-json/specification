# Text

A `text` hint describes a value that should be interpreted as text.

## Format Rules

The value MAY be `undefined` or a simple value.

## Example

```json
{
  "lastName": "Cronauer",
  "spec": {
    "hints": [ "object" ],
    "children": [
      {
        "name": "lastName",
        "hints": [ "text" ]
      }
    ]
  }
}
```

## User Agent Considerations

A user agent must anticipate that a value described by a `text` hint may contain any length and combination of characters, including line breaks.
