/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class Target {
    Key: Value<string>
    Values: List<Value<string>>

    constructor(properties: Target) {
        Object.assign(this, properties)
    }
}

export class ParameterValues {
    ParameterValues: List<Value<string>>

    constructor(properties: ParameterValues) {
        Object.assign(this, properties)
    }
}

export interface AssociationProperties {
    DocumentVersion?: Value<string>
    InstanceId?: Value<string>
    Name: Value<string>
    Parameters?: {[key: string]: ParameterValues}
    ScheduleExpression?: Value<string>
    Targets?: List<Target>
}

export default class Association extends ResourceBase {
    constructor(properties: AssociationProperties) {
        super('AWS::SSM::Association', properties)
    }
}
