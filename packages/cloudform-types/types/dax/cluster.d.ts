import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class SSESpecification {
    SSEEnabled?: Value<boolean>;
    constructor(properties: SSESpecification);
}
export interface ClusterProperties {
    SSESpecification?: SSESpecification;
    Description?: Value<string>;
    ReplicationFactor: Value<number>;
    ParameterGroupName?: Value<string>;
    AvailabilityZones?: List<Value<string>>;
    IAMRoleARN: Value<string>;
    SubnetGroupName?: Value<string>;
    PreferredMaintenanceWindow?: Value<string>;
    NotificationTopicARN?: Value<string>;
    SecurityGroupIds?: List<Value<string>>;
    NodeType: Value<string>;
    ClusterName?: Value<string>;
    Tags?: ResourceTag[];
}
export default class Cluster extends ResourceBase {
    static SSESpecification: typeof SSESpecification;
    constructor(properties?: ClusterProperties);
}
