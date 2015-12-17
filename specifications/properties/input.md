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

## Authoring Rules

None

## Authoring Considerations

None

## User Agent Rules

None

## User Agent Considerations

None
