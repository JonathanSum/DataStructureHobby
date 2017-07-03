/**
 * Created by JonathanSum on 7/2/2017.
 */
var insert = function(array, rightIndex, value) {
    for(var i=rightIndex; i>=0 && value<array[i];i--){
        array[i+1]=array[i];
    }
    array[i+1]=value;

};

var array = [3, 5, 7, 11, 13, 2, 9, 6];

insert(array, 4, 2);


insert(array, 5, 9);


insert(array, 6, 6);
var insert = function(array, rightIndex, value) {
    for(var j = rightIndex;
        j >= 0 && array[j] > value;
        j--) {
        array[j + 1] = array[j];
    }
    array[j + 1] = value;
};

var insertionSort = function(array) {
    for(var i=1; i<array.length;i++){
         insert(array, i-1, array[i]);

    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
println("Array after sorting:  " + array);
Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);
