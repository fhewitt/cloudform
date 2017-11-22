"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Predicate extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::WAF::Predicate', properties, dependsOn);
    }
}
exports.Predicate = Predicate;
class Rule extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::WAF::Rule', properties, dependsOn);
    }
}
exports.default = Rule;
