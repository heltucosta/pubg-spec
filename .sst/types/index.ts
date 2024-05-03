import "sst/node/config";
declare module "sst/node/config" {
  export interface ConfigTypes {
    APP: string;
    STAGE: string;
  }
}import "sst/node/table";
declare module "sst/node/table" {
  export interface TableResources {
    "Players": {
      tableName: string;
    }
  }
}import "sst/node/table";
declare module "sst/node/table" {
  export interface TableResources {
    "Teams": {
      tableName: string;
    }
  }
}import "sst/node/table";
declare module "sst/node/table" {
  export interface TableResources {
    "Tourneys": {
      tableName: string;
    }
  }
}import "sst/node/api";
declare module "sst/node/api" {
  export interface ApiResources {
    "api": {
      url: string;
    }
  }
}import "sst/node/site";
declare module "sst/node/site" {
  export interface StaticSiteResources {
    "ReactSite": {
      url: string;
    }
  }
}