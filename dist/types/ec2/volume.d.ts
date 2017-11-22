import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
export interface VolumeProperties {
    AutoEnableIO?: Value<boolean>;
    AvailabilityZone: Value<string>;
    Encrypted?: Value<boolean>;
    Iops?: Value<number>;
    KmsKeyId?: Value<string>;
    Size?: Value<number>;
    SnapshotId?: Value<string>;
    Tags?: ResourceTag[];
    VolumeType?: Value<string>;
}
export default class Volume extends ResourceBase {
    constructor(properties: VolumeProperties, dependsOn?: Value<string>);
}
