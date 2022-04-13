function betterThanAverage(classPoints, yourPoints) {
    //   Find the sum of all the scores
    let sum = 0;
    for (var i in classPoints) {
        sum += classPoints[i];
    }
    //   Find the length of the array
    let numbersCnt = classPoints.length;
    //   find the average of the scores
    let classAvg = sum / numbersCnt;

    //   if else to check if my score is better than the class average
    if (yourPoints <= classAvg) {
        return false;
    } else {
        return true;
    }
}