# Labeled By Specification Property

## Name

`http://lynx-json.org/labledBy`

## Meaning

The `labeledBy` property of a specification identifies another value that labels the current value.

## Format Rules

* The `labeledBy` property is OPTIONAL. If present, its value MUST be the property name of the value that labels the value being described by the specification.
* The property referenced by the `labeledBy` property SHOULD be described by a [`label` hint](#label-hint). 

## Example

```json
{
  "label": "What did you think of the movie?",
  "comments": null,
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
        "labeledBy": "label"
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

When finding the value identified by the `labledBy` property, the user agent MUST use the [process for finding values](#process-for-finding-values).

## User Agent Considerations

None
