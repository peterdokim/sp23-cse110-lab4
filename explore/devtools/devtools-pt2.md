The bug was that num1 and num2 are interpreted as string, and when added together, it is mapped onto each other as string so value arises from 5 + 4 not equal to 9 but 54.
I would change it by parseInt(num1) by changing string element into integer element of number values.

