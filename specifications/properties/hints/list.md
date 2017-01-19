# List Hint

## Name

`http://lynx-json.org/list`

## Meaning

A `list` hint describes a value that is a container of independent values that are related to each other in some way.

## Related Hints

- `[ "list", "container" ]`
- `[ "list", "link" ]`
- `[ "list", "submit" ]`
- `[ "list", "form" ]`

## Synonyms

None

## Format Rules

None

## Example

```json
{
  "spec": {
    "hints": [ "list", "container" ],
    "children": {
      "hints": [ "text" ]
    }
  },
  "value": [
    "Milk",
    "Eggs",
    "Flour"
  ]
}

```

## Authoring Rules

None

## Authoring Considerations

Use a `list` hint when more emphasis should be placed on the individual values in the list.

## User Agent Rules

None

## User Agent Considerations

In order to emphasize the individual values in a list while still conveying the closeness of their relationship, a user agent should display the list in a way that accomplishes that goal. For example, a user agent may choose to display the values in a list in the secondary direction of reading order, such as top-to-bottom in English (as opposed to the primary direction of reading order of left-to-right) to emphasize each value, but reduce the space between the values to convey their interrelationships.
