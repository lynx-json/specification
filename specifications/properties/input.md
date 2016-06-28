# Input Specification Property

## Name

`http://lynx-json.org/input`

## Meaning

The `input` property of a specification describes a value that captures a value from the user.

## Format Rules

The `input` property is OPTIONAL. If present, its value:

- MAY be `true`.
- MAY be a string to indicate the name of the form data value.
- MAY be an object with a `name` property whose value MUST be a string to indicate the name of the form data value.

## Examples

### Text Input

```json
{
  "rating": "PG",
  "spec": {
    "hints": [ "form" ],
    "children": [
      {
        "name": "rating",
        "input": true,
        "hints": [ "text" ]
      }
    ]
  }
}
```

```json
{
  "rating": "PG",
  "spec": {
    "hints": [ "form" ],
    "children": [
      {
        "name": "rating",
        "input": "mpaa-rating",
        "hints": [ "text" ]
      }
    ]
  }
}
```

```json
{
  "rating": "PG",
  "spec": {
    "hints": [ "form" ],
    "children": [
      {
        "name": "rating",
        "input": {
          "name": "mpaa-rating"
        },
        "hints": [ "text" ]
      }
    ]
  }
}
```

### Multi-Valued Text Input

```json
{
  "scores": [],
  "spec": {
    "hints": [ "form" ],
    "children": [
      {
        "name": "scores",
        "hints": [ "container" ],
        "input": true,
        "children": {
          "hints": [ "text" ],
          "input": true
        }
      }
    ]
  }
}
```

## Authoring Rules

In order to represent a multi-valued input, the specification describing the container:

* MUST have a `container` hint
* MUST have an `input` property
* MUST have a `children` property that is a specification which MUST also have an `input` property.

## Authoring Considerations

None

## User Agent Rules

If the container value is considered a multi-valued input, the user agent MUST provide the user with controls to add or remove values to or from the container.

## User Agent Considerations

None
