const fs = require("fs");
const csv = require("csv-parser");

const results = [];

fs.createReadStream("input.csv")
  .pipe(csv())
  .on("data", (row) => {
    const code = String(row["법정동코드"]).trim();
    const sido = String(row["시도명"] || "").trim();
    const sigungu = String(row["시군구명"] || "").trim();
    const dong = String(row["읍면동명"] || "").trim();
    const deleted = row["삭제일자"];

    // 폐지 제거
    if (deleted) return;

    // 시도
    if (!sigungu && !dong) {
      results.push([code, sido, null, 1]);
    }

    // 시군구
    else if (sigungu && !dong) {
      const parent = code.substring(0, 2) + "00000000";
      results.push([code, `${sido} ${sigungu}`, parent, 2]);
    }
  })
  .on("end", () => {
    let sql = `
DROP TABLE IF EXISTS regions;

CREATE TABLE regions (
  code VARCHAR(10) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  parentCode VARCHAR(10),
  level INT NOT NULL,
  INDEX idx_parent (parentCode)
);

INSERT INTO regions (code, name, parentCode, level) VALUES
`;

    const values = results.map(([code, name, parent, level]) => {
      const p = parent ? `'${parent}'` : "NULL";
      return `('${code}', '${name}', ${p}, ${level})`;
    });

    sql += values.join(",\n") + ";";

    fs.writeFileSync("regions.sql", sql, "utf-8");

    console.log("regions.sql 생성 완료");
  });