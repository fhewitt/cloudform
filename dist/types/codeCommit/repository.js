"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class RepositoryTrigger {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RepositoryTrigger = RepositoryTrigger;
class Repository extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::CodeCommit::Repository', properties);
    }
}
exports.default = Repository;
