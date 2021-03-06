# Content Hint

## Name

`http://lynx-json.org/content`

## Meaning

A `content` hint describes a value that contains or references content that is to be considered a part of the containing representation (embedded).

## Related Hints

None

## Synonyms

None

## Format Rules

If the value is present, it must comply with the following rules:

- MUST be an object.
- MAY have an `src` property for remote content or a `data` property for inline content.
- SHOULD have an `alt` property for alternate text to be displayed if the content cannot be displayed or if the user cannot view it.
- MAY have a `scope` property whose value specifies the content realm or [URL](../../../#url) intended for display. If present, the value MUST be a valid [URI](../../../#uri).
- MAY have a `rel` property whose value specifies the relationship between the document containing the content and the destination resource, as described in [RFC 5988](../../../references/#rfc-5988).
- MAY contain a `media` property whose value specifies the intended media target of the content. If present, the value MAY be one of the following: `screen`, `print`, or a qualified name (absolute URI); otherwise, its value MUST be presumed to be `screen`.
- MAY contain a `sources` property whose value specifies an array of preferred alternative `content` values ordered from more preferred to less preferred.
- MUST NOT contain any other properties that are described by a specification.
- MAY contain other properties that are not described by a specification.

### `src` present

If the value has an `src` property:

- `src` MUST be a valid [URI](../../../#uri) or `null`.
- MAY have a `type` property whose value must be a valid 
  [media type name](../../../references/#rfc-6838) to indicate the expected 
  media type of the content.
- MUST NOT have `data` or `encoding` properties.

### `data` present

If the value has a `data` property:

- MUST have a `type` property whose value must be a valid 
  [media type name](../../../references/#rfc-6838) to indicate the media type of
  the content encoded in the `data` property.
- if `type` is `application/json` or a variant of `application/json`, 
  `data` MAY be an object or an array; otherwise, `data` MUST be a string 
  representing the content to be embedded.
- if `type` is `application/lynx+json`, and the embedded content does
  not have its own `base` value, the value of `base` MUST be copied from the containing document.
- if `data` is a string, MAY have an `encoding` property 
  whose value MUST be `utf-8` or `base64`. If not present, the `encoding` 
  is `utf-8`.
- MUST NOT have an `src` property.

## Examples

### `src` present

```json
{
  "src": "http://www.example.com/fletch-movie-review.pdf",
  "alt": "Movie Review of Fletch",
  "spec": {
    "hints": [ "content" ]
  }
}
```

### `data` present

#### UTF-8 String

```json
{
  "data": "# Review of Fletch\n##Pros\n\nToo many to list.\n##Cons\n\nNone!",
  "type": "text/markdown",
  "alt": "Movie Review of Fletch",
  "spec": {
    "hints": [ "content" ]
  }
}
```

#### Base64 String

```json
{
  "data": "WW91IHRhbGtpbmcgdG8gbWU/IC0tIFRheGkgRHJpdmVy",
  "encoding": "base64",
  "type": "text/plain",
  "alt": "Movie Quote",
  "spec": {
    "hints": [ "content" ]
  }
}
```

#### JSON Content

```json
{
  "data": {
    "base": "http://example.com/",
    "realm": "http://example.com/movie-quotes/",
    "value": [
      "There's no crying in baseball! -- Tom Hanks, A League of Their Own",
      "Mrs. Robinson, you're trying to seduce me. Aren't you? -- Dustin Hoffman, The Graduate",
      "Donny you're out of your element! -- John Goodman, The Big Lebowski"
    ],
    "spec": {
      "hints": [ "list", "container" ],
      "children": {
        "hints": [ "text" ]
      }
    }
  },
  "type": "application/lynx+json",
  "spec": {
    "hints": [ "content" ]
  }
}
```

#### Alternate Sources

```json
{
  "data": "There's no crying in baseball! -- Tom Hanks, A League of Their Own",
  "type": "text/plain",
  "sources": [
    {
      "src": "./no-crying.mp4",
      "type": "video/mp4",
      "alt": "Video Clip: There's no crying in baseball!",
      "spec": {
        "hints": [ "content" ]
      }
    },
    {
      "src": "./no-crying.mov",
      "type": "video/quicktime",
      "alt": "Video Clip: There's no crying in baseball!",
      "spec": {
        "hints": [ "content" ]
      }
    }
  ],
  "spec": {
    "hints": [ "content" ]
  }
}
```

#### With Media

```json
{
  "src": "./receipt.lnx",
  "type": "application/lynx+json",
  "media": "screen",
  "sources": [
    {
      "src": "./receipt.pdf",
      "type": "application/pdf",
      "media": "print",
      "spec": {
        "hints": [ "content" ]
      }
    }
  ],
  "spec": {
    "hints": [ "content" ]
  }
}
```

## Authoring Rules

None

## Authoring Considerations

None

## User Agent Rules

- If the user agent is unable to display the content, it MUST display a link to the content, with the text of the `alt` property, if present.
- If the type of the content is not in the range `text/*`, then the user agent SHOULD consider the value of the `alt` property to be the text content for the value.

### Input

If the specification describing the value has an `input` property, the user agent MUST provide the user with a control to supply the content.

## User Agent Considerations

- The user agent must anticipate that a value described by a `content` hint may contain no visible content.
- If a value described by a `content` hint contains a `sources` property, the user agent should display the content from the `sources` property value most closely matching its goals. To do so, the user agent should evaluate the available alternatives in order based on `type`, `hints`, `media`, and any other characteristics (image `width`, `height`, and `scale`, for example). If the user agent cannot display any of the preferred alternatives from the `sources` property value, the user agent should display the value described by a `content` hint.
