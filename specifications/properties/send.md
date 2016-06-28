# Send Specification Property

## Name

`http://lynx-json.org/send`

## Meaning

The `send` property of a specification describes a submit control that the user agent should invoke on behalf of the user.

## Format Rules

The `send` property is OPTIONAL. If present, its value MUST be `"change"`.

## Examples

```json
{
  "title": "Add a Comment",
  "comment": null,
  "postComment": {
    "title": "Submit",
    "action": "/comments",
    "method": "POST"
  },
  "spec": {
    "hints": [ "form" ],
    "children": [
      {
        "name": "title",
        "hints": [ "label", "text" ]
      },
      {
        "name": "comment",
        "hints": [ "text" ],
        "input": true
      },
      {
        "name": "postComment",
        "hints": [ "submit" ],
        "send": "change",
        "labeledBy": "title",
        "children": [
          {
            "name": "title",
            "hints": [ "label", "text" ]
          }
        ]
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

After displaying the document containing the value described by the `send` property, the user agent MUST submit the related form data when the value of an input changes if the validation state of the form is not invalid.

## User Agent Considerations

None
