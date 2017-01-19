# Line Hint

## Name

`http://lynx-json.org/line`

## Meaning

A `line` hint describes a value that should be interpreted as text without breaks.

## Related Hints

- [ "line", "text" ]

## Synonyms

None

## Format Rules

- MUST NOT contain a line feed (U+000A) character
- MUST NOT contain a carriage return (U+000D) character

## Examples

```json
{
  "password": "",
  "spec": {
    "hints": [ "container" ],
    "children": [
      {
        "name": "password",
        "hints": [ "line", "text" ],
        "visibility": "concealed",
        "input": true
      }
    ]
  }
}
```

## Authoring Rules

None

## Authoring Considerations

None

## User Agent Rules

None

## User Agent Considerations

None
