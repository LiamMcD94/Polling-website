const data = [
    {
        pollId: 1,
        pollName: "Premier League Winner",
        question: "Who will win the Premier League?",
        options: [
            {
            optionId: 1,
            optionText: "Manchester City",
            vote: 12
            },
            {
            optionId: 2,
            optionText: "Arsenal",
            vote: 47
            },
            {
            optionId: 3,
            optionText: "Liverpool",
            vote: 4
            }
      ]
    },
    {
        pollId: 2,
        pollName: "Winner",
        question: "Who will lose the Premier League?",
        options: [
            {
            optionId: 1,
            optionText: "Manchester United",
            vote: 10,
            },
            {
            optionId: 2,
            optionText: "Hull",
            vote: 63
            },
            {
            optionId: 3,
            optionText: "London",
            vote: 32
            }
        ]
    }
];

function getData(){
    return data
}
exports.getData = getData

function getData(pollId) {
    return data.find((data => data.pollId === pollId));
}

function addData(data){

}