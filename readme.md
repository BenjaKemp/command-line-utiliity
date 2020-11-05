command line utility to calculate salary and bonus payments per month for a period of one year

to run this utility

open up a new session in your shell and run 

git clone https://github.com/BenjaKemp/command-line-utiliity.git

enter the folder with

cd command-line-utiliity

run 

``` npm install ```

followed by

``` npm link ```

it's a means to connect your parent application to a module you have locally on your machine. It will also link any bins in the package to {prefix}/bin/{name}.

finally, you're ready to run the utility by typing 

run-payments

the function  which produces the output has 3 functions which are called in order to calculate various elements.
you can test that these individual parts work by running

npm run test




