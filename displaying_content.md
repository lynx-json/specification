# Displaying Content

## Selecting a Media Object for Document Display

When a document is retrieved as a result of an interaction with a `link`, `submit`, or from within an embedded document, the user agent MUST attempt to select a `media` object, according to the following steps:

1. Let "origin" equal the `link`, `submit`, or `media` object that is the source of the transition.
2. Iterate over the origin and its descendents, via depth-first traversal, and select the first `media` object with a `scope` that includes the realm of the document, according to the "Normalization and Comparison" rules for [realm uri](#realm-uri).
3. If no `media` object has been selected but the origin has a parent, let origin equal the parent and repeat step 2. If the origin has no parent, but is contained in a `media` object, then let origin equal the containing `media` object and repeat step 2. Repeat until a `media` object is selected or the origin has no remaining ancestors.

The user agent MUST update the embedded document of the selected `media` object and display it to the user. If no `media` object is selected, then the user agent MUST display the document at the root.
