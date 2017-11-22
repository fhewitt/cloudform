/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'



export interface ElasticLoadBalancerAttachmentProperties {
    ElasticLoadBalancerName: Value<string>
    LayerId: Value<string>
}

export default class ElasticLoadBalancerAttachment extends ResourceBase {
    constructor(properties: ElasticLoadBalancerAttachmentProperties, dependsOn?: Value<string>) {
        super('AWS::OpsWorks::ElasticLoadBalancerAttachment', properties, dependsOn)
    }
}