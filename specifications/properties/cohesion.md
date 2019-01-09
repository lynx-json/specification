# Cohesion Specification Property

## Name

`http://lynx-json.org/cohesion`

## Meaning

The `cohesion` property describes the closeness of children
of a container.

## Format Rules

- The `cohesion` property is OPTIONAL. If present, its value MUST be one of
  the following values: `very-low`, `low`, `medium`, `high`, or `very-high`.

## Example

```json
{
  "value": [
    "Result 1",
    "Result 2",
    "Result 3"
  ],
  "spec":{
    "hints": [ "container" ],
    "cohesion": "high",
    "children": {
      "hints": [ "text" ]
    }
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

- The user agent should consider adjusting the space between items based
  the container's `cohesion`. For example, containers with `cohesion: "very-low"` should have a large
  space between items.
