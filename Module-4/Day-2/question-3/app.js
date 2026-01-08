import os from "os";
import { promises as fs } from "fs";

async function main() {
    try{
        console.log("Free Memory:", os.freemem());
        console.log("Total CPU Cores:", os.cpus().length);
        await fs.writeFile("data.txt", "Hello World");
        await fs.writeFile("Readme.md", "## This is first line in Readme");

        const content = await fs.readFile("data.txt", "utf-8");
        console.log(content);

        await fs.appendFile("data.txt", "\nThis is second line");
        await fs.unlink("Readme.md");
    } 
    catch (error) {
    console.error("Error:", error.message);
  }
}

main();



