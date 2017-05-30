# Comparing values for equality

To run some code if two values are equal, it helps to do a double conditional forward skip. First, one value is subtracted from the other, and a conditional skip is entered. Then, the other value is subtracted from the first, and a conditional is entered. The second conditional will only be entered if both of those subtractions ended up with positive results, meaning that the results of both were 0.

In the following example, assume that V1 is known and V2 is unknown.

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

# Going down a series of values and running the selected code

To go down a consecutive series of values and execute code in only one of them, skipping all the rest, it helps to use the run-up lever. You will need a counter variable that is set to the first value that you want to check, minus 1, so if your values start at 5, you set the counter to 4. You will also have the index that you are wanting to match. First, make sure the run up lever is reset. Add a conditional skip for every condition you want to test. Inside the conditional skip, increment the counter variable. Subtract the index from the counter. If the result was positive, you have found your value! A conditional skip with an unconditional skip afterwards (`{?}{}`) is created. The code in the conditional skip should be the code that runs when the correct value is found. Then, it is important to do a calculation that will set the run up lever (a subtraction that results in a negative value) after your code runs. In the unconditional skip, you must reset the run up lever (do some addition). It is useful to put a comment card at the end of such an operation, as if your library ends with this pattern, the card chain might run out.

This pattern will partially run the code in every block until it finds the correct block, and then completely skip every block afterwards.

In the following example, L002 is the counter, L001 is 1, L000 is the index that you want to match. This example represents one of the conditional blocks, of which there will be many.

```
{?
. these blocks will run until it reaches the index it wants
+ . increment counter
L002
L001
S002
. subtract index from counter to see if negative
-
L002
L000
. if this was positive, you have found your get index
{?
. code to execute goes here
. do a negative calculation to set run up lever
-
L001
L002
}{
. reset the run-up lever if this wasn't your index
+
L001
L002
}
}
```
