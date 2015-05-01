# Object

An `object` hint describes a value that should be interpreted as an object.

## Format Rules

MUST comply with the rules defined for [all objects](#objects).

## Example

```json
{
  "title": "Groundhog Day",
  "spec": {
    "hints": [ "object" ],
    "children": [
        {
            "name": "title",
            "hints": [ "title", "text" ]
        }
    ]
  }
}
```

## User Agent Rules

MUST comply with the rules defined for [all objects](#objects).
