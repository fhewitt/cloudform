import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class FleetLaunchTemplateSpecificationRequest {
    LaunchTemplateName?: Value<string>;
    Version?: Value<string>;
    LaunchTemplateId?: Value<string>;
    constructor(properties: FleetLaunchTemplateSpecificationRequest);
}
export declare class FleetLaunchTemplateConfigRequest {
    LaunchTemplateSpecification?: FleetLaunchTemplateSpecificationRequest;
    Overrides?: List<FleetLaunchTemplateOverridesRequest>;
    constructor(properties: FleetLaunchTemplateConfigRequest);
}
export declare class OnDemandOptionsRequest {
    AllocationStrategy?: Value<string>;
    constructor(properties: OnDemandOptionsRequest);
}
export declare class TagRequest {
    Value?: Value<string>;
    Key?: Value<string>;
    constructor(properties: TagRequest);
}
export declare class TargetCapacitySpecificationRequest {
    DefaultTargetCapacityType?: Value<string>;
    TotalTargetCapacity: Value<number>;
    OnDemandTargetCapacity?: Value<number>;
    SpotTargetCapacity?: Value<number>;
    constructor(properties: TargetCapacitySpecificationRequest);
}
export declare class FleetLaunchTemplateOverridesRequest {
    WeightedCapacity?: Value<number>;
    Priority?: Value<number>;
    AvailabilityZone?: Value<string>;
    SubnetId?: Value<string>;
    InstanceType?: Value<string>;
    MaxPrice?: Value<string>;
    constructor(properties: FleetLaunchTemplateOverridesRequest);
}
export declare class TagSpecification {
    ResourceType?: Value<string>;
    Tags?: ResourceTag[];
    constructor(properties: TagSpecification);
}
export declare class SpotOptionsRequest {
    AllocationStrategy?: Value<string>;
    InstanceInterruptionBehavior?: Value<string>;
    InstancePoolsToUseCount?: Value<number>;
    constructor(properties: SpotOptionsRequest);
}
export interface EC2FleetProperties {
    TargetCapacitySpecification: TargetCapacitySpecificationRequest;
    OnDemandOptions?: OnDemandOptionsRequest;
    Type?: Value<string>;
    ExcessCapacityTerminationPolicy?: Value<string>;
    TagSpecifications?: List<TagSpecification>;
    SpotOptions?: SpotOptionsRequest;
    ValidFrom?: Value<number>;
    ReplaceUnhealthyInstances?: Value<boolean>;
    LaunchTemplateConfigs: List<FleetLaunchTemplateConfigRequest>;
    TerminateInstancesWithExpiration?: Value<boolean>;
    ValidUntil?: Value<number>;
}
export default class EC2Fleet extends ResourceBase {
    static FleetLaunchTemplateSpecificationRequest: typeof FleetLaunchTemplateSpecificationRequest;
    static FleetLaunchTemplateConfigRequest: typeof FleetLaunchTemplateConfigRequest;
    static OnDemandOptionsRequest: typeof OnDemandOptionsRequest;
    static TagRequest: typeof TagRequest;
    static TargetCapacitySpecificationRequest: typeof TargetCapacitySpecificationRequest;
    static FleetLaunchTemplateOverridesRequest: typeof FleetLaunchTemplateOverridesRequest;
    static TagSpecification: typeof TagSpecification;
    static SpotOptionsRequest: typeof SpotOptionsRequest;
    constructor(properties?: EC2FleetProperties);
}
