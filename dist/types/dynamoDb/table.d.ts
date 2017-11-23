import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class TimeToLiveSpecification {
    AttributeName: Value<string>;
    Enabled: Value<boolean>;
    constructor(properties: TimeToLiveSpecification);
}
export declare class AttributeDefinition {
    AttributeName: Value<string>;
    AttributeType: Value<string>;
    constructor(properties: AttributeDefinition);
}
export declare class LocalSecondaryIndex {
    IndexName: Value<string>;
    KeySchema: List<KeySchema>;
    Projection: Projection;
    constructor(properties: LocalSecondaryIndex);
}
export declare class ProvisionedThroughput {
    ReadCapacityUnits: Value<number>;
    WriteCapacityUnits: Value<number>;
    constructor(properties: ProvisionedThroughput);
}
export declare class GlobalSecondaryIndex {
    IndexName: Value<string>;
    KeySchema: List<KeySchema>;
    Projection: Projection;
    ProvisionedThroughput: ProvisionedThroughput;
    constructor(properties: GlobalSecondaryIndex);
}
export declare class KeySchema {
    AttributeName: Value<string>;
    KeyType: Value<string>;
    constructor(properties: KeySchema);
}
export declare class Projection {
    NonKeyAttributes?: List<Value<string>>;
    ProjectionType?: Value<string>;
    constructor(properties: Projection);
}
export declare class StreamSpecification {
    StreamViewType: Value<string>;
    constructor(properties: StreamSpecification);
}
export interface TableProperties {
    AttributeDefinitions?: List<AttributeDefinition>;
    GlobalSecondaryIndexes?: List<GlobalSecondaryIndex>;
    KeySchema: List<KeySchema>;
    LocalSecondaryIndexes?: List<LocalSecondaryIndex>;
    ProvisionedThroughput: ProvisionedThroughput;
    StreamSpecification?: StreamSpecification;
    TableName?: Value<string>;
    Tags?: ResourceTag[];
    TimeToLiveSpecification?: TimeToLiveSpecification;
}
export default class Table extends ResourceBase {
    constructor(properties: TableProperties);
}
