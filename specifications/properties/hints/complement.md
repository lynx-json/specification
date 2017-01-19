# Complement Hint

## Name

`http://lynx-json.org/complement`

## Meaning

A `complement` hint describes a value that is secondary in nature to the sibling values before it, after it, or both.

## Related Hints

- `["complement", "container"]`

## Synonyms

None

## Format Rules

None

## Example

```json
{
  "spec": {
    "hints": [ "container" ],
    "children": [
      { 
        "name": "bio",
        "hints": [ "text" ]
      },
      {
        "name": "sidebar",
        "hints": [ "complement", "container" ],
        "children": {
          "hints": [ "text" ]
        }
      }
    ]
  },
  "value": {
    "bio": "Cornelius Crane \"Chevy\" Chase is an American comedian, actor, writer and producer.",
    "sidebar": [
      "Generally, Chevy is short for Cheviot which is a breed of sheep.",
      "Cheviot Hills, also known as Chevy Chase, is a region of England near the Scottish border."
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
