mongoimport --db BinaryHomework3 --collection Students --file F:/binary/BinaryHomework3/dataSample.json --jsonArray

1.
db.Students.find({
    scores: {
        $elemMatch: {
            score: {
                $gt: 87,
                $lt: 93
            }
        }
    }
});

2.
db.Students.aggregate([{
    $unwind: '$scores'
}, {
    $match: {
        'scores.type': 'exam',
        'scores.score': {
            $gt: 90
        }
    }
}]);

//with sort descending:

db.Students.aggregate([{
    $unwind: '$scores'
}, {
    $match: {
        'scores.type': 'exam',
        'scores.score': {
            $gt: 90
        }
    }
}, {
    $sort: {
        'scores.score': -1
    }
}]);

// Select only names:

db.Students.aggregate([{
    $unwind: '$scores'
}, {
    $match: {
        'scores.type': 'exam',
        'scores.score': {
            $gt: 90
        }
    }
}, {
    $project: {
        name: 1,
        _id: 0
    }
}]);

3.
db.Students.update({
    'name': 'Dusti Lemmond'
}, {
    $set: {
        'accepted': true
    }
}, {
    multi: true
});