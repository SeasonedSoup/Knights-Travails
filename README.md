# Knights-Travails
utilizing certain algorithms  on finding the fastest way for a knight to go to a certain part of the board

### Notes:

This Utilizes a BFS algorithm the graph is not explicit but rather implicit utilizing the directions of a knight while preventing out of bounds.
why? dfs utilizes going to the deepest path first which means wed have to calculate and get the minimum steps everytime in the graph and bfs would go level by level and would only require one counter that counts for every step. 

I created and utilized a linked list class for each possible path and just create a copy every level for each pushed direction into the queue to print the path. 

A hashset and a out of bounds checker is also required to make it in bounds if any of this checks return true we skip and continue the next iteration of the direction loop.

the direction of the knight given in order are as follows: 2 steps right, 1 step up ||| 2steps right, 1 step down ||| 2 steps left, 1 step up; |||
                                                           2 steps left, 1 step down ||| 1 step right, 2 step up ||| 1 step left, 2 step up |||
                                                           1 step right, 2 step down ||| 1 step left, 2 step down *OR* x right, x left, x up, x down in order **(might be confusing)**

the queue is important for a bfs due to its inherent nature that the first found graph that is equals to the end point of the knight means weve found it then just print the counter and the path. the hashset prevents going in an infinite back and forth queue towards the same coordinates so utilizing them as a key converted to a string will prevent this said problem i have encountered.

the queue values pushed contains two objects rather than array so we dont rely on indexes but rather words, they are pos and path, pos is just the current position and path will be the linked list that contains the history of previous positions the knight was within.





