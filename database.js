const data = [
{
    pollId: 1,
    pollName: "Premier League Winner",
    question: "Who will win the Premier League?",
    options: [
    {
    optionId: 1,
    optionText: "Manchester City",
    },
    {
    optionId: 2,
    optionText: "Arsenal",
    },
    {
    optionId: 3,
    optionText: "Liverpool",
    },
    {
    optionId: 4,
    optionText: "Hull",
    },
    {
    optionId: 5,
    optionText: "London",
    },    
    ]
},
{
    pollId: 2,
    pollName: "Premier League Winner",
    question: "Who will win the Premier League?",
    options: [
    {
    optionId: 1,
    optionText: "Manchester City",
    },
    {
    optionId: 2,
    optionText: "Arsenal",
    },
    {
    optionId: 3,
    optionText: "Liverpool",
    },
    {
    optionId: 4,
    optionText: "Hull",
    }    
    ]
},
{
    pollId: 3,
    pollName: "Premier League Winner",
    question: "Who will win the Premier League?",
    options: [
    {
    optionId: 1,
    optionText: "Manchester City",
    },
    {
    optionId: 2,
    optionText: "Arsenal",
    },
    {
    optionId: 3,
    optionText: "Liverpool",
    }   
    ]
}
];
  
let votes = [
{
    pollId: 1,
    votes: [
    {
    optionId: 1,
    resultText: "Manchester City",
    result: 35
    },
    {
    optionId: 2,
    resultText: "Arsenal",
    result: 23
    },
    {
    optionId: 3,
    resultText: "Liverpool",
    result: 68
    },
    {
    optionId: 4,
    resultText: "Hull",
    result: 31
    },
    {
    optionId: 5,
    resultText: "London",
    result: 42
    },    
    ]
},
{
pollId: 2,
votes: [
    {
    voteId: 1,
    resultText: "Manchester City",
    result: 35
    },
    {
    voteId: 2,
    resultText: "Arsenal",
    result: 23
    },
    {
    voteId: 3,
    resultText: "Liverpool",
    result: 68
    },
    {
    voteId: 4,
    resultText: "Hull",
    result: 25
    }, 
    ]
},
{
pollId: 3,
votes: [
    {
    voteId: 1,
    resultText: "Manchester City",
    result: 35
    },
    {
    voteId: 2,
    resultText: "Arsenal",
    result: 10
    },
    {
    voteId: 3,
    resultText: "Liverpool",
    result: 68
    }  
    ]
}
];

function getData(id) {
    return data.find(data => data.pollId === id);
}
exports.getData = getData

function getVotes(id) {
    return votes.find(votes => votes.pollId === id);
}
exports.getVotes = getVotes

function addVote(vote) {
    const id = +vote.pollId
    const addVote = +vote.vote
    votes[id -1].votes[addVote].result++
    console.log("adding vote for " + votes[id -1].votes[vote.vote].resultText + ": " + votes[id -1].votes[vote.vote].result)
}
exports.addVote = addVote