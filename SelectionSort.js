/**
 * Created by JonathanSum on 7/2/2017.
 */
var indexOfMinimum = function(array, startIndex) {
    // Set initial values for minValue and minIndex,
    // based on the leftmost entry in the subarray:
    // println("before> "+array[startIndex]);
    var minValue = array[startIndex];
    var minIndex = startIndex;
    for(var i = minIndex + 1; i< array.length;i++){
        // println("before: "+array[minIndex]);
        if(array[i]<minValue){
            minIndex = i;
            minValue = array[i];
            // println(array[i]);
        }
    }
    // Loop over items starting with startIndex,
    // updating minValue and minIndex as needed:

    return minIndex;
};

var array = [18, 6, 66, 44, 9, 22, 14];
var index = indexOfMinimum(array, 2);

//  For the test array [18, 6, 66, 44, 9, 22, 14],
//  the value 9 is the smallest of [..66, 44, 9, 22, 14]
//  Since 9 is at index 4 in the original array,
//  "index" has value 4
println(array[index]);
println("The index of the minimum value of the subarray starting at index 2 is " + index + "."  );
Program.assertEqual(index, 4);
var index = indexOfMinimum(array, 0);

Program.assertEqual(index, 1);
var index = indexOfMinimum(array, 4);

Program.assertEqual(index, 4);
