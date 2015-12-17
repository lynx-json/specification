# Content Validation Constraint Value

## Name

http://lynx-json.org/validation/content

## Meaning

The content validation constraint value expresses a content constraint or an array of content constraints for an input value.

## Format Rules

A content validation constraint value MUST be a content validation constraint object or an array of content validation constraint objects that complies with the following rules:

- MUST comply with the [validation constraint object](#validation-constraint-object) rules.
- MAY have a `type` property. If present, the value of the property MUST be a string or an array of strings matching one of the following:
  - A file extension (e.g., `.jpg`, `.png`, `.doc`).
  - A [media type range](#media-type-range) (e.g., `image/png`, `image/*`).
- MAY have a `maxLength` property representing the maximum length of the content in bytes. If present, the value of the property MUST be a nonnegative integer.

## Example

```json
{
  "movie": null,
  "movieTypeAndLengthError": "Please select a video that is 4MB or less in size.",
  "spec": {
    "hints": [ "container" ],
    "children": [
      {
        "name": "movie",
        "hints": [ "content" ],
        "input": true,
        "validation": {
          "content": {
            "invalid": "movieTypeAndLengthMessage",
            "type": "video/*",
            "maxLength": 4000000
          }
        }
      },
      {
        "name": "movieTypeAndLengthError",
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

// TODO: remove "ignore" and decide on wording

The user agent MAY ignore the `content` property, otherwise it MUST comply with the following rules for each content validation constraint object in its value:

- If the value does not match one or more of the values of the `type` property, then the validation state of the constraint is `invalid`.
- If the length of the value in bytes exceeds the value of the `maxLength` property, then the validation state of the constraint is `invalid`.
- If the previous tests have not determined the validation state of the constraint to be `invalid`, then the validation state of the constraint is `valid`.

## User Agent Considerations

When providing a control to the user to supply a value, the user agent may choose to assist the user in providing valid input. If the value is described by a hint of `content`, the user agent may choose to make items that match the `type` and/or `maxLength` properties more prominent.
