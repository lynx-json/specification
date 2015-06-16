# Displaying Content

## Selecting a Content Object for Document Display

When a document is retrieved as a result of an interaction with a `link`, `submit`, or from within an embedded document, the user agent MUST attempt to select a `content` object, according to the following steps:

1. Let "origin" equal the `link`, `submit`, or `content` object that is the source of the transition.
2. Iterate over the origin and its descendents, via depth-first traversal, and select the first `content` object with a `scope` that includes the realm of the document, according to the "Normalization and Comparison" rules for [realm uri](#realm-uri).
3. If no `content` object has been selected but the origin has a parent, let origin equal the parent and repeat step 2. If the origin has no parent, but is contained in a `content` object, then let origin equal the containing `content` object and repeat step 2. Repeat until a `content` object is selected or the origin has no remaining ancestors.

The user agent MUST update the embedded document of the selected `content` object and display it to the user. If no `content` object is selected, then the user agent MUST display the document at the root.