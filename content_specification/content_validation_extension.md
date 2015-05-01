# Content
The `content` property describes the validity of the content of a `content` input.

## Format Rules

The `content` property is OPTIONAL. If present, it MUST be an an object, or an array of objects, matching the following rules:

- MUST have a `message` property whose value MUST be a [same-document reference](#same-document-reference) to the content to display when the input value fails validation.
- MAY have a `type` property. If present, the value of the property MUST be a string or an array of strings matching one of the following:
-- A file extension (e.g., `.jpg`, `.png`, `.doc`).
-- A [media type range](#media-type-range) (e.g., `image/png`, `image/*`).
- MAY have a `maxLength` property representing the maximum length of the content in bytes. If present, the value of the property MUST be a nonnegative integer.

## Example

```json
{
  "name": "movie",
  "hints": [ "content" ],
  "input": true,
  "validation": {
    "content": {
      "message": "#movieTypeAndLengthMessage",
      "type": "video/*",
      "maxLength": 4000000
    }
  }
}
```

## User Agent Rules

The user agent MAY ignore the `content` property, otherwise it MUST comply with the following rules:

- If the value does not match one or more of the values of the `type` property, then the input fails validation.
- If the length of the value in bytes exceeds the value of the `maxLength` property, then the input fails validation.

## User Agent Considerations

When providing a control to the user, the user agent may choose to assist the user in providing valid input. If the value has a hint of `content`, the user agent may choose to make items that match the `type` and/or `maxLength` properties more prominent.
