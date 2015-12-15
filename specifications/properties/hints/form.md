# Form Hint

## Name

http://lynx-json.org/form

## Meaning

A `form` hint describes a value that should be interpreted as a form.

## Related Hints

None

## Synonyms

None

## Format Rules

If the value is present, it must comply with the following rules:

- MUST be an object.
- MAY have a `scope` property whose value specifies the content realm intended for display. If present, the value MUST comply with the rules defined for [realm URI](#realm-uri).
- MAY contain other properties.

## Examples

```json
{
  "title": "Add a Comment",
  "comment": null
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

## Authoring Rules

None

## Authoring Considerations

A form should contain at least one value described by a [`submit` hint](#submit-hint).

## User Agent Rules

None

## User Agent Considerations

- The user agent must anticipate that a value described by a `form` hint may not contain visible content.
- The user agent must anticipate that a value described by a `form` hint may contain other properties that are also described by a specification.
