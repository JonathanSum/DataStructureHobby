

var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex] ;
	array[firstIndex] = array[secondIndex];
	array[secondIndex] =temp;
};

var testArray = [7, 9, 4];
swap(testArray, 0, 1);
// Program.assertEqual(testArray, [9, 7, 4]);
swap(testArray, 1, 2);
// Program.assertEqual(testArray, [9, 4, 7]);
swap(testArray, 0, 1);
// println(testArray);
alert(testArray);
// Program.assertEqual(testArray, [4, 9, 7]);





/**
 * Created by JonathanSum on 7/2/2017.
 */
