/**/
identityFunc(); // Here the javascript compiler will look for the identity function in the execution stack.
                //Then it knows that function is not defined, so it throws an error saying that it is an undefined function.

var identityFunc ; // Here we are declaring an variable
identityFunc=function hoist(val) { return val ;};// At this point we have created an function with a name "Hoist" and has been referenced 
                                                  //to the variable we have declared earlier.

identityFunc(); // We are invoking the function that we have declared earlier.
                //An undefined would be the O/P.Because the hoist function would except an value,but we haven't passed any value while invoking the function.
                //So an undefined value would be passed. So the result would be undefined.

/**/