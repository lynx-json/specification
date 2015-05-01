# URI Fragments

URI fragments are used to locate values in a document by property name.

## Example

```json
{
  "linkToCast": {
    "title": "Cast"
    "href": "#cast"
  },
  "cast": [
    "Robin Williams",
    "Matt Damon",
    "Ben Affleck"
  ],
  "spec": "http://www.example.com/specs/movie"
}
```

## User Agent Rules

To locate a value using a URI fragment, the user agent MUST search the document for a property with a name matching the fragment. Using depth-first traversal, the value of the first property whose name matches the fragment is the result. Depth-first traversal is performed according to the the order of the specifications in the [`children` property](#children) and, if a value is an array, the order of the items in the array.

## Authoring Consideration

A URI fragment referencing a property that is not described by a specification will not be located.
