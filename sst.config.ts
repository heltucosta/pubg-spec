import { SSTConfig } from "sst"
//import { DynamoStack } from './stacks/DynamoStack'
//import { NotesApiStack } from './stacks/NotesApi'
//import { AuthStack } from './stacks/AuthStack'
import { FrontendStack } from "./stacks/FrontendStack"
import { ApiStack } from './stacks/ApiStack'

export default {
  config(_input) {
    return {
      name: "pubg-spec-dashboard",
      region: "sa-east-1",
    };
  },
  stacks(app) {
    app
//      .stack(DynamoStack)
//      .stack(NotesApiStack)
//      .stack(AuthStack)
      .stack(ApiStack)
      .stack(FrontendStack)
  }
} satisfies SSTConfig
