function randomLikes() {
  const number = Math.random() * (10000 - 500) + 500;
  if (number > 1000) {
    return `${(number / 1000).toFixed(1)}K`;
  } else {
    return Math.floor(number);
  }
}

function randomReplies() {
  const number = Math.random() * (5000 - 200) + 200;
  if (number > 1000) {
    return `${(number / 1000).toFixed(1)}K`;
  } else {
    return Math.floor(number);
  }
}

function randomShares() {
  const number = Math.random() * (1000 - 100) + 100;
  if (number > 1000) {
    return `${(number / 1000).toFixed(1)}K`;
  } else {
    return Math.floor(number);
  }
}

export { randomLikes, randomReplies, randomShares };
