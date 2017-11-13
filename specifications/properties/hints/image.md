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
- MAY have a `scale` property. If present, the value MUST be a numeric multiplier of the natural width and height of the image. For example, an image with a `width` of 100, a `height` of 100, and a `scale` of 2 has
an actual width and height of 200px. If not present, the value MUST be presumed to be 1.

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

### With Scale

```json
{
  "title": "Bill Murray",
  "photo": {
    "src": "http://www.fillmurray.com/g/300/400",
    "alt": "Picture of Bill Murray",
    "width": 300,
    "height": 400,
    "sources": [
      {
        "src": "http://www.fillmurray.com/g/600/800",
        "alt": "Picture of Bill Murray",
        "width": 300,
        "height": 400,
        "scale": 2,
        "spec": {
          "hints": [ "image", "content"]
        }
      },
      {
        "src": "http://www.fillmurray.com/g/900/1200",
        "alt": "Picture of Bill Murray",
        "width": 300,
        "height": 400,
        "scale": 3,
        "spec": {
          "hints": [ "image", "content"]
        }
      }
    ]
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

- If the user agent resizes the image, it MUST maintain the natural aspect ratio and it SHOULD provide a control to view the image in its natural size.

## User Agent Considerations

None
