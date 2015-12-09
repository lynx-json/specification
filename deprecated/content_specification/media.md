# Content

A `content` hint describes a value that contains or references content that is to be considered a part of the containing representation (embedded).

## Format Rules

- MUST comply with the rules defined for [all objects](#objects).
- MUST have either an `src` property for remote content or a `data` property for inline content.
- SHOULD have an `alt` property whose value specifies alternate text to be displayed if the content cannot be displayed or if the user cannot view it.
- MAY have a `scope` property whose value specifies the content realm intended for display. If present, the value MUST comply with the rules defined for [realm URI](#realm-uri).

### `src` present

- The `src` property value MUST be a valid [URI](#uri).
- MUST NOT have a `data`, `type`, or `encoding` property.

### `data` present

- The `data` property value MUST be a string representing the content to be embedded.
- MUST have a `type` property to indicate the media type of the content. Its value must be a string that represents a valid [media type name](#media-type-name).
- MAY have an `encoding` property whose value MUST be either `utf-8` or `base64`. If not present, the value is `utf-8`.
- MUST NOT have an `src` property.

## Examples

### `src` present

```json
{
  "title": "Fletch",
  "src": "http://www.example.com/fletch-movie-review.pdf",
  "alt": "Movie Review",
  "spec": {
    "hints": [ "content" ],
    "children": [
        {
            "name": "title",
            "hints": [ "title", "text" ]
        }
    ]
  }
}
```

### `data` present

```json
{
  "title": "Fletch",
  "data": "# Review of Fletch\n##Pros\n\nToo many to list.\n##Cons\n\nNone!",
  "type": "text/markdown",
  "alt": "Movie Review",
  "spec": {
    "hints": [ "content" ],
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

- MUST comply with the rules defined for [all objects](#objects).
- If the user agent is unable to display the content, it MUST display a link to the content, with the text of the `alt` property if it exists.

### Input

- The user agent MUST provide the user with a control to provide the content.

## User Agent Considerations

- The user agent must anticipate that a `content` object may contain additional properties (a title, text, objects, arrays, links, etc.).
- The user agent must anticipate that a `content` object may contain no visible content.
