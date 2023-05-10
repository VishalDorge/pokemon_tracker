export const schemaData = (moduleName) => 
`import { I${moduleName.toUpperCase()[0] + moduleName.slice(1)}, ${moduleName.toUpperCase()[0] + moduleName.slice(1)}s } from "./${moduleName}.types";
import { v4 } from "uuid";
export class ${moduleName.toUpperCase()[0] + moduleName.slice(1)}Schema{
    private static ${moduleName}s: ${moduleName.toUpperCase()[0] + moduleName.slice(1)}s = [];
    static create(${moduleName}: I${moduleName.toUpperCase()[0] + moduleName.slice(1)}){
        ${moduleName}.id = v4();
        ${moduleName.toUpperCase()[0] + moduleName.slice(1)}Schema.${moduleName}s.push(${moduleName});
        return ${moduleName.toUpperCase()[0] + moduleName.slice(1)}Schema.${moduleName}s;
    }
}`;

export const typeData = (moduleName) => `export interface I${moduleName.toUpperCase()[0] + moduleName.slice(1)}{
    id: string;
}

export type ${moduleName.toUpperCase()[0] + moduleName.slice(1)}s = I${moduleName.toUpperCase()[0] + moduleName.slice(1)}[];`

export const repoData = (moduleName) => 

`import { ${moduleName.toUpperCase()[0] + moduleName.slice(1)}Schema } from "./${moduleName}.schema";
import { I${moduleName.toUpperCase()[0] + moduleName.slice(1)} } from "./${moduleName}.types";

const create = (${moduleName}: I${moduleName.toUpperCase()[0] + moduleName.slice(1)}) => ${moduleName.toUpperCase()[0] + moduleName.slice(1)}Schema.create(${moduleName});

export default{
 create   
}`

export const serviceData = (moduleName) => 

`import ${moduleName}Repo from "./${moduleName}.repo";
import { I${moduleName.toUpperCase()[0] + moduleName.slice(1)} } from "./${moduleName}.types";

const create = (${moduleName}: I${moduleName.toUpperCase()[0] + moduleName.slice(1)}) => ${moduleName}Repo.create(${moduleName});

export default{
    create
}`

export const responseData = (moduleName) => 
`export const ${moduleName.toUpperCase()[0] + moduleName.slice(1)}Responses = {
    
}`

export const routeData = () => 
`import { Router } from "express";

const router = Router();

router.post("/", (req, res, next) => {

})

export default router;`