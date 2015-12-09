# Process for Finding Values

Some specification properties are used to target other values in the document including `label`, `message`, and `options`. The value of these types of properties is the name of another value in the document. To find the value, use the following steps:

1. Let "origin" equal the value that is targeting another value and let "target" be the name of the target.
2. Iterate over the origin and its descendants, via depth-first traversal, and select the first value with a `name` that exactly matches the target.
3. If no value has been found but the origin has a parent, let origin equal the parent and repeat step 2 until a value is found or the origin has no remaining ancestors.
