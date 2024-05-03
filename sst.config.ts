import { SSTConfig } from "sst"
import { PlayersTableStack } from './stacks/database/PlayersTableStack'
import {TeamsTableStack} from "./stacks/database/TeamsTableStack"
import {TourneysTableStack} from "./stacks/database/TourneysTableStack"
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
      .stack(PlayersTableStack)
      .stack(TeamsTableStack)
      .stack(TourneysTableStack)
      .stack(ApiStack)
      .stack(FrontendStack)
  }
} satisfies SSTConfig
