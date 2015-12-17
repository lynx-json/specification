# Follow Specification Property

## Name

`http://lynx-json.org/follow`

## Meaning

The `follow` property of a specification describes a hyperlink that the user agent should follow on behalf of the user.

## Format Rules

The `follow` property is OPTIONAL. If present, its value MUST be a positive number representing milliseconds.

## Examples

```json
{
  "title": "Preparing movie for viewing. Please wait...",
  "href": "http://www.example.com/movies/fletch/watch",
  "spec": {
    "hints": [ "link" ],
    "children": [
      {
        "name": "title",
        "hints": [ "label", "text" ]
      }
    ],
    "follow": 5000
  }
}
```

## Authoring Rules

None

## Authoring Considerations

None

## User Agent Rules

After displaying the document containing the value described by the `follow` property, the user agent MUST wait the specified number of milliseconds and then MUST follow the hyperlink.

## User Agent Considerations

None
