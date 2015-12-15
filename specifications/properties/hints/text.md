# Text Hint

## Name

http://lynx-json.org/text

## Meaning

A `text` hint describes a value that should be interpreted as text.

## Related Hints

None

## Synonyms

None

## Format Rules

The value MAY be a simple value or `undefined`.

## Examples

```json
{
  "lastName": "Cronauer",
  "spec": {
    "hints": [ "container" ],
    "children": [
      {
        "name": "lastName",
        "hints": [ "text" ]
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

A user agent must anticipate that a value described by a `text` hint may contain any length and combination of characters, including line breaks.
