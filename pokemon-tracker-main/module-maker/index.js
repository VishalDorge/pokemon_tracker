import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import url from 'url';
import { schemaData, typeData, repoData, serviceData, responseData, routeData } from "./data.js";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

inquirer
.prompt([
    {
        name: "moduleName",
        message: "Enter name of the module: "
    }
])
.then((answers) => {
        const folderName = `../app/${answers.moduleName}`;
        try {
            if (!fs.existsSync(folderName)) fs.mkdirSync(folderName);
        } catch (err) {console.error(err);}

        const dirPath = path.join(__dirname, `../app/${answers.moduleName}/`);
        fs.writeFileSync(dirPath + `${answers.moduleName}.types.ts`, typeData(answers.moduleName));
        fs.writeFileSync(dirPath + `${answers.moduleName}.schema.ts`, schemaData(answers.moduleName));
        fs.writeFileSync(dirPath + `${answers.moduleName}.repo.ts`, repoData(answers.moduleName));
        fs.writeFileSync(dirPath + `${answers.moduleName}.service.ts`, serviceData(answers.moduleName));
        fs.writeFileSync(dirPath + `${answers.moduleName}.responses.ts`, responseData(answers.moduleName));
        fs.writeFileSync(dirPath + `${answers.moduleName}.routes.ts`, routeData());
    });