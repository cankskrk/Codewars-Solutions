const isMerge = (s, part1, part2) => {
  if (s === "" && part1 === "" && part2 === "") return console.log(true);

  if (s !== "") {
    if (s[0] === part1[0] && part1[0] === part2[0]) {
      return (
        isMerge(s.slice(1), part1.slice(1), part2) ||
        isMerge(s.slice(1), part1, part2.slice(1))
      );
    } else if (s[0] === part1[0]) {
      return isMerge(s.slice(1), part1.slice(1), part2);
    } else if (s[0] === part2[0]) {
      return isMerge(s.slice(1), part1, part2.slice(1));
    }
  }

  return console.log(false);
};

isMerge("codewars", "cdw", "oears");
