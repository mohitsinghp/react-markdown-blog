const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "../src/content");
let postList = [];

const getPosts = () => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log("Failed to list contents of directory", err);
    }
    files.forEach((file, index) => {
      let obj = {};
      let post;
      fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
        const getMetaDataindices = (acc, element, i) => {
          if (/^---/.test(element)) {
            acc.push(i);
          }
          return acc;
        };

        const parseMetaData = (lines, metaDataIndices) => {
          if (metaDataIndices.length > 0) {
            let metaData = lines.slice(
              metaDataIndices[0] + 1,
              metaDataIndices[1]
            );
            metaData.forEach((line) => {
              obj[line.split(":")[0]] = line.split(": ")[1];
            });
            return obj;
          }
        };

        const parseContent = (lines, metaDataIndices) => {
          if (metaDataIndices.length > 0) {
            lines = lines.slice(metaDataIndices[1] + 1, lines.length);
          }
          return lines.join("\n");
        };
        const lines = contents.split("\n");
        const metaDataIndices = lines.reduce(getMetaDataindices, []);
        const metaData = parseMetaData(lines, metaDataIndices);
        const content = parseContent(lines, metaDataIndices);
        const date = new Date(metaData.date);
        const timeStamp = date.getTime() / 1000;
        console.log(timeStamp);
        post = {
          id: timeStamp,
          title: metaData.title ? metaData.title : "",
          author: metaData.author ? metaData.author : "Anonymous",
          date: metaData.date ? metaData.date : "",
          content: content ? content : "No content given",
        };
        postList.push(post);
        if (index === files.length - 1) {
          const sortedList = postList.sort((a, b) => {
            return a.id < b.id ? 1 : -1;
          });
          let data = JSON.stringify(sortedList);
          fs.writeFileSync("src/posts.json", data);
        }
      });
    });
  });
  return;
};

getPosts();
