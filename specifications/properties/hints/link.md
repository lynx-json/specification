# Link Hint

## Name

`http://lynx-json.org/link`

## Meaning

A `link` hint describes a value that represents a hyperlink.

## Related Hints

None

## Synonyms

None

## Format Rules

If the value is present, it must comply with the following rules:

- MUST be an object.
- MUST have an `href` property whose value is a valid [URI](/#uri).
- MAY have a `type` property whose value must be a valid [media type name](/references/#rfc-6838) to indicate the expected media type of the content.
- MAY have a `scope` property whose value specifies the content realm intended for display. If present, the value MUST comply with the rules defined for [realm URI](/realm/).
- MAY have a `rel` property whose value specifies the relationship between the document containing the link and the destination resource, as described in [RFC 5988](/references/#rfc-5988).
- MAY contain other properties.

## Examples

```json
{
  "title": "Fletch",
  "href": "http://www.example.com/movies/fletch",
  "spec": {
    "hints": [ "link" ],
    "children": [
        {
            "name": "title",
            "hints": [ "label", "text" ]
        }
    ]
  }
}
```

## Authoring Rules

None

## User Agent Rules

- The user agent MUST provide the user with a control to interact with the hyperlink in order to follow it.
- If the user follows the hyperlink, then the user agent MUST fetch the target identified by the `href` using the default retrieval action for the protocol (e.g. GET for HTTP).
- The user agent SHOULD display or make the `href` accessible to the user so he/she can consider its value prior to following the hyperlink.

## User Agent Considerations

- The user agent must anticipate that a value described by a `link` hint may not contain visible content.
- The user agent must anticipate that a value described by a `link` hint may contain other properties that are also described by a specification.
