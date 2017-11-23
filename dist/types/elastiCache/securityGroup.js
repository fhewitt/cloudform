"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SecurityGroup extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::ElastiCache::SecurityGroup', properties);
    }
}
exports.default = SecurityGroup;
