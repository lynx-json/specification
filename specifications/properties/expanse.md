# Expanse Specification Property

## Name

`http://lynx-json.org/expanse`

## Meaning

The `expanse` property describes the anticipated space necessary to display a value, relative to its siblings.

## Format Rules

- The `expanse` property is OPTIONAL. If present, its value MUST be a positive
  integer.

## Example

```json
{
  "small-value": "Small value",
  "large-value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "spec":{
    "hints": [ "container" ],
    "children": [
      {
        "name": "small-value",
        "hints": [ "text" ],
        "expanse": 1
      },
      {
        "name": "large-value",
        "hints": [ "text" ],
        "expanse": 11
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

None

## User Agent Considerations

- The user agent should consider adjusting the space available for a value
  based on its `expanse`. For example, when displaying a container's children
  horizontally, a value with a relatively high `expanse` value should be given
  greater width than a value with a relatively low `expanse` value.
