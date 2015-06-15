# Image

An `image` hint describes a value that should be interpreted as an embedded image.

## Format Rules

- MUST comply with the rules defined for [content](#content).
- MUST precede the `content` hint.
- MAY have a `height` property whose value MUST be a number representing the natural height of the image in pixels.
- MAY have a `width` property whose value MUST be a number representing the natural width of the image in pixels.

## Example

```json
{
  "title": "Bill Murray",
  "src": "http://www.fillmurray.com/g/300/400",
  "alt": "Picture of Bill Murray",
  "height": 400,
  "width": 300,
  "spec": {
    "hints": [ "image", "content" ],
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

- MUST comply with the rules defined for [content](#content).
- If the user agent resizes the image, it MUST maintain the natural aspect ratio and it SHOULD provide a control to view the image in its natural size.
