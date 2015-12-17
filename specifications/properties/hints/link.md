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
- MUST have an `href` property whose value is a valid [URI](#uri).
- MAY have a `type` property whose value must be a valid [media type name](#media-type-name) to indicate the expected media type of the content.
- MAY have a `scope` property whose value specifies the content realm intended for display. If present, the value MUST comply with the rules defined for [realm URI](#realm-uri).
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

## Authoring Considerations

While the concept of a link relationship ("rel") has been intentionally omitted from these rules, that does not mean that it has no value or that it should be omitted from authored documents. The purpose of this specification is to define the meaning of the values - not to define the relationship between the value and the resource identified by the context URI. The "rel" concept is still important and it could be included in a link object by extension.

## User Agent Rules

- The user agent MUST provide the user with a control to interact with the hyperlink in order to follow it.
- If the user follows the hyperlink, then the user agent MUST fetch the target identified by the `href` using the default retrieval action for the protocol (e.g. GET for HTTP).
- The user agent SHOULD display or make the `href` accessible to the user so he/she can consider its value prior to following the hyperlink.

## User Agent Considerations

- The user agent must anticipate that a value described by a `link` hint may not contain visible content.
- The user agent must anticipate that a value described by a `link` hint may contain other properties that are also described by a specification.
