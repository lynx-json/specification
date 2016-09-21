# Submitter Specification Property

## Name

`http://lynx-json.org/submitter`

## Meaning

The `submitter` property of a specification identifies another value that is the submitter for the element.

## Format Rules

- The `submitter` property is OPTIONAL. If present, its value MUST be the property name of the value that submits form data for the value being described by the specification.
- The property referenced by the `submitter` property SHOULD be described by a [`submit` hint](/specifications/properties/hints/submit.md).

## Example

```json
{
  "label": "What did you think of the movie?",
  "comments": null,
  "dislike": {
    "method": "POST",
    "action": "/dislike/comments"
  },
  "like": {
    "method": "POST",
    "action": "/like/comments"
  },
  "spec":{
    "hints": [ "form" ],
    "children": [
      {
        "name": "label",
        "hints": [ "label", "text" ]
      },
      {
        "name": "comments",
        "hints": [ "text" ],
        "input": true,
        "labeledBy": "label",
        "submitter": "like"
      },
      {
        "name": "dislike",
        "hints": [ "submit" ]
      },
      {
        "name": "like",
        "hints": [ "submit" ]
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

- When finding the value identified by the `submitter` property, the user agent MUST use the [process for finding values](/processes/finding_values.md) and invoke the value's control.

## User Agent Considerations

None
