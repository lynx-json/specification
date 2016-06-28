# Validation Specification Property

## Name

`http://lynx-json.org/validation`

## Meaning

The `validation` property of a specification is used to indicate that a value has validation state and identify related content that should be displayed when the validation state changes. The `validation` property is also used to express constraints on an input value, or input values, and identify content that should be displayed when a constraint is, or when a set of constraints are, in a certain state.

## Format Rules

### Validation Constraint Set Object

The value of the `validation` property must be an object that complies with the following rules:

  - MUST not have `state` property.
  - MAY have any of following properties: `invalid`, `valid`, and `unknown`. If present, their value MUST be a [property reference](#property-references) targeting the content to be displayed when the validation constraint set object is in that state.
  - MAY have a `required` property. If present, its value must be a [required validation constraint value](#required-validation-constraint).
  - MAY have a `text` property. If present, its value must be a [text validation constraint value](#text-validation-constraint-value).
  - MAY have a `number` property. If present, its value must be a [number validation constraint value](#number-validation-constraint-value).
  - MAY have a `content` property. If present, its value must be a [content validation constraint value](#content-validation-constraint-value).
  - MAY have any other properties whose values MUST be a validation constraint object or an array of validation constraint objects.

### Validation Constraint Object

The value of a validation constraint object must be an object that complies with the following rules:

  - MAY have a `state` property. If present, its value MUST be `invalid`, `valid`, or `unknown`.
  - MAY have any of following properties: `invalid`, `valid`, and `unknown`. If present, their value MUST be a [property reference](#property-references) targeting the content to be displayed when the validation constraint object is in that state.
  - MAY have any other property.

## Examples

```json
{
  "label": "First Name",
  "firstName": "Chevy",
  "requiredMessage": "The 'First Name' is required.",
  "spec": {
    "children": [
      {
        "name": "label",
        "hints": [ "text" ]
      },
      {
        "name": "firstName",
        "hints": [ "text" ],
        "input": true,
        "validation": {
          "required": {
            "state": "invalid",
            "invalid": "requiredMessage"
          }
        }
      },
      {
        "name": "requiredMessage",
        "hints": [ "text" ]
      }
    ]
  }
}
```

## Authoring Considerations

When the server performs validation of user input values and responds to invalid input with a form, consider expressing the validation constraints that were violated and related `invalid` and `unknown` content to help the user resolve the issue.

If any content is targeted by a validation state property (`invalid`, `valid`, or `unknown`), its `visibility` will be determined by the user agent upon initial rendering of the document and upon change of user input values.

## Authoring Rules

None

## User Agent Considerations

The user agent must anticipate that unrecognized validation constraint names may be included in a validation constraint set. The user agent must respect the `state` value of those constraints and update content visibility accordingly.

## User Agent Rules

For a validation constraint set object, the user agent MUST consider it to have a validation state whose value is derived from the validation state of the constraints contained within the set according to the following rules:

  - if any constraints in the set have a validation state of `invalid` or if the value being described is a container with a descendent with a validation state of `invalid`, then the validation state of the set is `invalid`;
  - otherwise, if any constraints in the set have a validation state of `unknown` or if the value being described is a container with a descendent with a validation state of `unknown`, then the validation state of the set is `unknown`;
  - otherwise, if any constraints in the set have a validation state of `valid` or if the value being described is a container with a descendent with a validation state of `valid`, then the validation state of the set is `valid`;
  - otherwise, the validation state of the set is `unknown`.


For all properties of the validation constraint set object that are not already reserved and defined:
  - if the value is an object the user agent MUST consider the property to be a validation constraint object, or
  - if the value is an array the user agent MUST consider the property to be an array of validation constraint objects.
- If the `state` property of a validation constraint object is not present, the user agent MUST consider the state of the validation constraint to be `unknown`.

Upon rendering a document,

- the user agent MUST honor the initial state of the validation constraint object. In other words, if the user agent has the capability to evaluate and set the `state` of a validation constraint object, it MUST NOT do so, and
- the user agent MUST update the `visibility` of content that is referenced by an `invalid`, `valid`, or `unknown` property based on the rules below.

Upon change of a user input value,

  - if the user agent has the capability to evaluate and set the `state` of a validation constraint object, it MUST do so; otherwise it MUST set the `state` to `unknown`, and
  - the user agent MUST update the `visibility` of content that is referenced by an `invalid`, `valid`, or `unknown` property based on the rules below.

Upon change of a validation constraint object's `state`, the user agent must reevaluate the validation state of ancestors.

Rules for updating content `visibility`:

If a property for the current validation state is present, then set the `visibility` of the content targeted by that property to `visible`. Set the `visibility` of content targeted by properties for all other validation states to `hidden`.
