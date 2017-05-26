# Comparing values for equality
To run some code if two values are equal, it helps to do a double conditional forward skip. Assume that L1 is known and L2 is unknown.
```
-
L1
L2
{?
-
L2
L1
{?
. code to execute if both are equal here
}
}
```
