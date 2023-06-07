import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function checkAndInsertData(model, data, modelName) {
  const existingData = await model.find();

  if (existingData.length === 0) {
    await model.insertMany(data);
    console.log(`\x1b[32m%s\x1b[0m`, `=> ${modelName} inserted successfully`);
  } else {
    console.log(
      `\x1b[33m%s\x1b[0m`,
      `=> ${modelName} already exist, skipping insertion`
    );
  }
}

export { __filename, __dirname, checkAndInsertData };
