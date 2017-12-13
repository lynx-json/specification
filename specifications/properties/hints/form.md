# Form Hint

## Name

`http://lynx-json.org/form`

## Meaning

A `form` hint describes a value that should be interpreted as a form.

## Related Hints

None

## Synonyms

- `object`
- `array`

## Format Rules

None

## Examples

### Object Value

```json
{
  "title": "Add a Comment",
  "comment": null,
  "spec": {
    "hints": [ "form" ],
    "children": [
      {
        "name": "title",
        "hints": [ "label", "text" ]
      },
      {
        "name": "comment",
        "hints": [ "text" ],
        "input": true
      }
    ]
  }
}
```

### Array Value

```json
{
  "value": [
    {
      "value": "Add a Comment",
      "spec": { 
        "hints": [ "label", "text"]
      }
    },
    {
      "value": null,
      "spec": {
        "hints": [ "text" ],
        "input": "comment"
      }
    }
  ],  
  "spec": {
    "hints": [ "form" ]
  }
}
```

## Authoring Rules

None

## Authoring Considerations

A form should contain at least one value described by a [`submit` hint](./submit.md).

## User Agent Rules

None

## User Agent Considerations

- The user agent must anticipate that a container may contain simple values, container values, or a combination of both.
- A user agent must anticipate that a value described by a `container` hint may contain any length and combination of values, including repeated values.