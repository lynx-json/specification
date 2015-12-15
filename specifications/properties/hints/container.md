# Container Hint

## Name

http://lynx-json.org/container

## Meaning

A `container` hint describes a value that should be interpreted as a container of other values.

## Related Hints

None

## Synonyms

- `object`
- `array`

## Format Rules

The value MAY be a container value or `undefined`.

## Examples

### Object Value

```json
{
  "title": "Groundhog Day",
  "spec": {
    "hints": [ "container" ],
    "children": [
        {
            "name": "title",
            "hints": [ "label", "text" ]
        }
    ]
  }
}
```

### Array Value

```json
{
  "value": [
    "Print this!",
    "Act like you don't give a crap and you fit right in.",
    "You know if you shoot me, you're liable to lose all of those humanitarian awards."
  ],
  "spec": {
    "hints": [ "container" ],
    "children": {
      "hints": [ "http://example.com/movie-quote", "text" ]
    }
  }
}
```

## Authoring Considerations

None

## Authoring Rules

None

## User Agent Rules

TBD - Need to add rules for container of inputs.

## User Agent Considerations

- The user agent must anticipate that a container may contain simple values, container values, or a combination of both.
- A user agent must anticipate that a value described by an `container` hint may contain any length and combination of values, including repeated values.
