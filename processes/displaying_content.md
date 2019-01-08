# Process for Displaying Content

When a new document is retrieved as a result of the user's interaction with a `link` or `submit` in a document, the user agent MUST attempt to select an object whose view should be updated with a view of the new document according to the following steps:

1. Let "origin" equal the `link`, `submit`, or `content` object that is the source of the transition.
2. Iterate over the origin and its descendants, via depth-first traversal, and select the first object with a `scope` that includes the realm or location of the document, according to the "Normalization and Comparison" rules for [realm uri](../realm/).
3. If no object has been found but the origin has a parent, let origin equal the parent and repeat step 2 until an object is found or the origin has no remaining ancestors.

The user agent MUST update the view for the selected object to display the new document to the user. If no object is selected, then the user agent MUST update the root view.
