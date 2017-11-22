import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface ClusterSecurityGroupIngressProperties {
    CIDRIP?: Value<string>;
    ClusterSecurityGroupName: Value<string>;
    EC2SecurityGroupName?: Value<string>;
    EC2SecurityGroupOwnerId?: Value<string>;
}
export default class ClusterSecurityGroupIngress extends ResourceBase {
    constructor(properties: ClusterSecurityGroupIngressProperties, dependsOn?: Value<string>);
}
