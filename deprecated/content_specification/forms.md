# Form

A `form` hint describes a value that should be interpreted as a form.

## Format Rules

MUST comply with the rules defined for [all objects](#objects).

## Example

```json
{
  "title": "A simple form",
  "exampleInput": null,
  "spec": {
    "hints": [ "form" ],
    "children": [
      {
        "name": "title",
        "hints": [ "title", "text" ]
      },
      {
        "name": "exampleInput",
        "hints": [ "text" ],
        "input": true
      }
    ]
  }
}
```

## User Agent Rules

MUST comply with the rules defined for [all objects](#objects).

## Authoring Considerations

A form should contain at least one [submit](#submit) object.
