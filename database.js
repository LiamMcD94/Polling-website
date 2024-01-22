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
            optionText: "Brighton",
            vote: 32
            },
            {
            optionId: 4,
            optionText: "London",
            vote: 32
            }
        ]
    }
];

function getData(pollid) {
    return data.find((data => data.pollId === pollid));
}
exports.getData = getData