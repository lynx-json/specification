# Link

A `link` hint describes a value that should be interpreted as a hyperlink.

## Format Rules

- MUST comply with the rules defined for [all objects](#objects).
- MUST have an `href` property whose value is a valid [URI](#uri).

## Example

```json
{
  "title": "Fletch",
  "href": "http://www.example.com/m/fletch",
  "spec": {
    "hints": [ "link" ],
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
- The user agent MUST provide the user with a control to interact with the link in order to follow it.
- If the user follows the link, then the user agent MUST fetch the target identified by the `href` using the default retrieval action for the protocol (e.g. GET for HTTP).
- The user agent SHOULD display or make the `href` accessible to the user so he/she can consider its value prior to following the link.

## User Agent Considerations

- The user agent must anticipate that a link may contain additional properties (a title, text, objects, arrays, links, etc.).
- The user agent must anticipate that a link may contain no visible content.

## Authoring Considerations

While the concept of a link relationship ("rel") has been intentionally omitted from these rules, that does not mean that it has no value or that it should be omitted from authored documents. The purpose of this specification is to define the meaning of the values - not to define the relationship between the value and the resource identified by the context URI. The "rel" concept is still important and it could be included in a link object by extension.
