# Set Hint

## Name

`http://lynx-json.org/set`

## Meaning

A `set` hint describes a value that is a container of values that
should be interpreted as alike in some fundamental way. Putting
values in a `set` emphasizes their similarity.

## Related Hints

- `[ "set", "container" ]`
- `[ "set", "link" ]`
- `[ "set", "submit" ]`
- `[ "set", "form" ]`

## Synonyms

None

## Format Rules

None

## Example

```json
{
  "spec": {
    "hints": [ "set", "container" ],
    "children": {
      "hints": [ "text" ]
    }
  },
  "value": [
    "Comedy",
    "Drama",
    "Action",
    "Romance"
  ]
}

```

## Authoring Rules

None

## Authoring Considerations

Use a `set` hint to emphasize the similarity of items.

## User Agent Rules

None

## User Agent Considerations

To emphasize the similarity of items in a `set`, the user agent should consider
displaying them with common width, height, spacing, and borders.
