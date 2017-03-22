# Image Hint

## Name

`http://lynx-json.org/image`

## Meaning

An `image` hint describes a value that contains or references image content that is to be considered a part of the containing representation (embedded).

## Related Hints

- `[ "image", "content" ]`

## Synonyms

None

## Format Rules

If the value is present, it must comply with the following rules:

- MUST comply with the [`content` hint](./content.md) format rules.
- MAY have a `height` property whose value MUST be a number representing the natural height of the image in pixels.
- MAY have a `width` property whose value MUST be a number representing the natural width of the image in pixels.

## Examples

```json
{
  "title": "Bill Murray",
  "photo": {
    "src": "http://www.fillmurray.com/g/300/400",
    "alt": "Picture of Bill Murray",
    "width": 300,
    "height": 400,
  },
  "spec": {
    "hints": [ "container" ],
    "children": [
        {
            "name": "title",
            "hints": [ "label", "text" ]
        },
        {
          "name": "photo",
          "hints": [ "image", "content" ]
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

If the user agent resizes the image, it MUST maintain the natural aspect ratio and it SHOULD provide a control to view the image in its natural size.

## User Agent Considerations

None
