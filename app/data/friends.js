// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
    {
      name: "George",
      photo: "https://specials-images.forbesimg.com/imageserve/5b43ae4b31358e2c990e9203/416x416.jpg?background=000000&cropX1=403&cropX2=2584&cropY1=60&cropY2=2242",
      scores: [
          "3",
          "3",
          "3",
          "3",
          "3",
          "3",
          "3",
          "3",
          "3",
          "3"
      ]
      
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendArray;