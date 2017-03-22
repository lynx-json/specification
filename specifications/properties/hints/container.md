# Container Hint

## Name

`http://lynx-json.org/container`

## Meaning

A `container` hint describes a value that should be interpreted as a container of other values.

## Related Hints

None

## Synonyms

- `object`
- `array`

## Format Rules

If the value is present, it must comply with the following rules:

- if the value is an object, it MAY have a `scope` property whose value specifies the content realm intended for display. If present, the value MUST comply with the rules defined for [realm URI](../../../realm/).

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

## Authoring Rules

None

## Authoring Considerations

None

## User Agent Rules

- TBD - Need to add rules for container of inputs.
- The user agent SHOULD consider the sum of the text content for all values in the container to be the text content for the container.

## User Agent Considerations

- The user agent must anticipate that a container may contain simple values, container values, or a combination of both.
- A user agent must anticipate that a value described by a `container` hint may contain any length and combination of values, including repeated values.
